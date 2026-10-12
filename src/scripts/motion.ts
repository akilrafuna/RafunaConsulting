import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

if (!reducedMotion) {
  lenis = new Lenis({
    lerp: 0.11,
    anchors: { offset: -96 },
    prevent: (node) => node.closest('dialog') !== null,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Freeze page scroll while a modal dialog is open.
  document.querySelectorAll('dialog').forEach((dialog) => {
    new MutationObserver(() => (dialog.open ? lenis?.stop() : lenis?.start())).observe(dialog, {
      attributes: true,
      attributeFilter: ['open'],
    });
  });
}

export { gsap, ScrollTrigger, lenis };

/* Guilloche work engraves itself as it arrives: one motion grammar for the whole site. */
export function engrave(svg: SVGSVGElement) {
  if (reducedMotion) return;
  const paths = svg.querySelectorAll('path');
  gsap.set(paths, { drawSVG: '0%' });
  ScrollTrigger.create({
    trigger: svg,
    start: 'top 90%',
    once: true,
    onEnter: () =>
      gsap.to(paths, {
        drawSVG: '100%',
        duration: 1.8,
        ease: 'expo.out',
        stagger: { each: 0.06, from: 'center' },
      }),
  });
}

/* Mobile action bar appears once the first viewport has passed. */
const bar = document.querySelector<HTMLElement>('[data-mobile-bar]');
if (bar) {
  const toggle = () => bar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}
