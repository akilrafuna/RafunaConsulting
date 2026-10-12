/**
 * Guilloche curve generator. Polar curves around (0,0), returned as SVG path data.
 * Families mirror what a rose-engine lathe cuts into a banknote plate:
 *  - rope:  r = R + A·sin(Nθ + φᵢ), phase-shifted copies weave into a braid
 *  - petal: r = R + A·cos(N(θ + δᵢ)), rotated copies form a lens net
 *  - rose:  r = R0 + A·|sin(Nθ + φᵢ)|^p, copies form a flower
 */

const TAU = Math.PI * 2;

export type RingKind = 'rope' | 'petal' | 'rose';

export interface Ring {
  kind: RingKind;
  /** Base radius (viewBox units, rosette spans -500..500). */
  r: number;
  /** Amplitude of the modulation. */
  a: number;
  /** Lobes per revolution. */
  n: number;
  /** Number of phase-shifted copies. */
  copies: number;
  /** Samples per lobe. */
  density?: number;
  /** Exponent for rose petals. */
  p?: number;
  /** Secondary slow modulation (adds the "breathing" of hand-turned work). */
  wobble?: number;
}

const fmt = (v: number) => (Math.round(v * 10) / 10).toString();

function polarPath(fn: (t: number) => number, samples: number): string {
  let d = '';
  for (let i = 0; i <= samples; i++) {
    const t = (i / samples) * TAU;
    const r = fn(t);
    const x = r * Math.cos(t);
    const y = r * Math.sin(t);
    d += (i === 0 ? 'M' : 'L') + fmt(x) + ' ' + fmt(y);
  }
  return d + 'Z';
}

export function ringPaths(ring: Ring): string[] {
  const { kind, r, a, n, copies } = ring;
  const samples = Math.max(120, Math.round(n * (ring.density ?? 14)));
  const wob = ring.wobble ?? 0;
  const out: string[] = [];
  for (let i = 0; i < copies; i++) {
    const f = i / copies;
    if (kind === 'rope') {
      const phi = f * TAU;
      out.push(polarPath((t) => r + a * Math.sin(n * t + phi) + wob * Math.sin(3 * t + phi), samples));
    } else if (kind === 'petal') {
      const delta = (f * TAU) / n / 2;
      out.push(polarPath((t) => r + a * Math.cos(n * (t + delta)) + wob * Math.cos(2 * t), samples));
    } else {
      const phi = (f * Math.PI) / n;
      const p = ring.p ?? 0.8;
      out.push(polarPath((t) => r + a * Math.pow(Math.abs(Math.sin(n * t + phi)), p), samples));
    }
  }
  return out;
}

/** A horizontal guilloche band (for dividers): phase-shifted sine waves across `width`. */
export function bandPaths(width: number, height: number, waves: number, copies: number, samples = 240): string[] {
  const mid = height / 2;
  const amp = height * 0.42;
  const out: string[] = [];
  for (let i = 0; i < copies; i++) {
    const phi = (i / copies) * TAU;
    let d = '';
    for (let s = 0; s <= samples; s++) {
      const x = (s / samples) * width;
      const t = (s / samples) * TAU * waves;
      const y = mid + amp * Math.sin(t + phi) * (0.65 + 0.35 * Math.cos(t / waves + phi / 2));
      d += (s === 0 ? 'M' : 'L') + fmt(x) + ' ' + fmt(y);
    }
    out.push(d);
  }
  return out;
}

/** The hero rosette: rings from the outside in, each assigned an ink plate. */
export const heroRosette: { ink: 'teal' | 'orange' | 'paper'; ring: Ring; spin: number }[] = [
  { ink: 'paper', ring: { kind: 'rope', r: 480, a: 6, n: 96, copies: 3, density: 9 }, spin: -1 },
  { ink: 'teal', ring: { kind: 'rope', r: 418, a: 28, n: 40, copies: 11, density: 12, wobble: 5 }, spin: 1 },
  { ink: 'orange', ring: { kind: 'rope', r: 300, a: 56, n: 16, copies: 9, density: 18, wobble: 8 }, spin: -1 },
  { ink: 'teal', ring: { kind: 'rope', r: 212, a: 10, n: 48, copies: 6, density: 10 }, spin: 1 },
  { ink: 'paper', ring: { kind: 'petal', r: 152, a: 22, n: 18, copies: 8, density: 16 }, spin: -1 },
];
