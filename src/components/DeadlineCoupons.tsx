import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import Counter from '@/components/Counter';
import { upcomingDeadlines, type Deadline, type DeadlineKind } from '@/data/tax';
import { monthYear } from '@/lib/dates';

interface Props {
  locale: 'sq' | 'en' | 'de';
  months: string[];
  /** ISO date used for the server render; the browser recomputes from today. */
  buildDate: string;
  labels: Record<DeadlineKind, string>;
  period: Record<DeadlineKind, string>;
  today: string;
  tomorrow: string;
  inDays: string;
  count?: number;
}

const DAY = 86_400_000;
const ROMAN = ['I', 'II', 'III', 'IV'];

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

function periodLabel(item: Deadline, months: string[], locale: Props['locale']) {
  const { kind, period } = item;
  if (kind === 'vat' || kind === 'withholding') {
    return monthYear(period, months);
  }
  if (kind === 'advance') {
    const q = Math.floor(period.getMonth() / 3);
    return locale === 'sq' ? `${ROMAN[q]} ${period.getFullYear()}` : `Q${q + 1} ${period.getFullYear()}`;
  }
  return String(period.getFullYear());
}

export default function DeadlineCoupons(props: Props) {
  const { locale, months, buildDate, labels, period, today, tomorrow, inDays, count = 4 } = props;
  const [now, setNow] = useState(() => startOfDay(new Date(buildDate)));
  const [rolling, setRolling] = useState(false);
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLOListElement>(null);

  // Recompute from the visitor's date once mounted.
  useEffect(() => setNow(startOfDay(new Date())), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    setRolling(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setShown(true));
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items = useMemo(() => upcomingDeadlines(now, count), [now, count]);
  const [before, after] = inDays.split('{n}');

  return (
    <ol ref={ref} className="coupons" data-armed={rolling || undefined} data-shown={shown || undefined}>
      {items.map((item, i) => {
        const days = Math.round((startOfDay(item.date).getTime() - now.getTime()) / DAY);
        const when = days === 0 ? today : days === 1 ? tomorrow : inDays.replace('{n}', String(days));
        return (
          <li className="coupon" key={`${item.kind}-${item.date.toISOString()}`} style={{ '--i': i } as CSSProperties}>
            <div className="coupon-body">
              <p className="coupon-kind">{labels[item.kind]}</p>
              <p className="coupon-date">
                <time dateTime={item.date.toISOString().slice(0, 10)}>
                  <span className="coupon-day">{item.date.getDate()}</span>
                  <span className="coupon-month">{monthYear(item.date, months)}</span>
                </time>
              </p>
              <p className="coupon-period">{period[item.kind].replace('{period}', periodLabel(item, months, locale))}</p>
            </div>
            <p className="coupon-stub">
              {days > 1 && rolling ? (
                <>
                  <span className="sr-only">{when}</span>
                  <span aria-hidden="true" className="coupon-count">
                    {before}
                    <Counter
                      value={shown ? days : 0}
                      fontSize={18}
                      padding={4}
                      gap={0}
                      horizontalPadding={1}
                      borderRadius={0}
                      places={days >= 100 ? [100, 10, 1] : days >= 10 ? [10, 1] : [1]}
                      gradientHeight={0}
                      gradientFrom="transparent"
                      textColor="inherit"
                      fontWeight={640}
                      counterStyle={{ fontFamily: 'inherit', verticalAlign: 'middle' }}
                    />
                    {after}
                  </span>
                </>
              ) : (
                when
              )}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
