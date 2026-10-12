import { useState, type ComponentProps } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';
import type { Dict } from '@/i18n/types';

interface Props {
  endpoint: string;
  locale: string;
  t: Dict['form'];
}

type State = 'idle' | 'sending' | 'sent' | 'error';

/** Posts to Formspree. Without JavaScript the same form submits natively. */
export default function ContactForm({ endpoint, locale, t }: Props) {
  const [state, setState] = useState<State>('idle');

  const onSubmit: NonNullable<ComponentProps<'form'>['onSubmit']> = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState('sent');
    } catch {
      setState('error');
    }
  };

  return (
    <form className="cform" action={endpoint} method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value={t.subject} />
      <input type="hidden" name="language" value={locale} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

      <div className="cform-row">
        <div className="cform-field">
          <Label htmlFor="cf-name">{t.name}</Label>
          <Input id="cf-name" name="name" required autoComplete="name" placeholder={t.namePh} />
        </div>
        <div className="cform-field">
          <Label htmlFor="cf-phone">
            {t.phone} <span className="cform-optional">({t.optional})</span>
          </Label>
          <Input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={t.phonePh} />
        </div>
      </div>

      <div className="cform-row">
        <div className="cform-field">
          <Label htmlFor="cf-email">{t.email}</Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            placeholder={t.emailPh}
          />
        </div>
        <div className="cform-field">
          <Label htmlFor="cf-service">{t.service}</Label>
          <NativeSelect id="cf-service" name="service" defaultValue="" className="w-full">
            <NativeSelectOption value="" disabled>
              {t.servicePh}
            </NativeSelectOption>
            {t.serviceOptions.map((option) => (
              <NativeSelectOption key={option} value={option}>
                {option}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </div>
      </div>

      <div className="cform-field">
        <Label htmlFor="cf-message">
          {t.message} <span className="cform-optional">({t.optional})</span>
        </Label>
        <Textarea id="cf-message" name="message" rows={5} placeholder={t.messagePh} />
      </div>

      <div className="cform-foot">
        <button type="submit" className="plate plate-orange" disabled={state === 'sending'} aria-disabled={state === 'sending'}>
          {state === 'sending' ? t.sending : t.submit}
        </button>
        <p className="cform-privacy">{t.privacy}</p>
      </div>

      <div aria-live="polite">
        {state === 'sent' && (
          <p className="cform-status" data-state="sent">
            <strong>{t.sent}</strong>
            {t.sentText}
          </p>
        )}
        {state === 'error' && (
          <p className="cform-status" data-state="error" role="alert">
            {t.error}
          </p>
        )}
      </div>
    </form>
  );
}
