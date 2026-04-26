// Blexa — brand marks + custom line icons.
// All icons are 24×24 viewBox, stroke-only, 1.5px. No emoji.

const Logo = ({ size = 22, variant = 'mark' }) => {
  // variant: mark | wordmark | dot
  if (variant === 'dot') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="blexa">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <circle cx="12" cy="12" r="3" fill="var(--bg)" />
      </svg>
    );
  }
  if (variant === 'monogram') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="blexa">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
        <path d="M8 7v10M8 7h5a3 3 0 0 1 0 6H8M8 13h6a3 3 0 0 1 0 6H8" stroke="var(--bg)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // default mark — a stylized aperture / scanner
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="blexa">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4.2 4.2M14.8 14.8L19 19M19 5l-4.2 4.2M9.2 14.8L5 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
};

const Wordmark = ({ logoVariant = 'mark', size = 22 }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--fg)' }}>
    <Logo variant={logoVariant} size={size} />
    <span style={{
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: size * 0.82,
      letterSpacing: '-0.03em',
      color: 'var(--fg)',
    }}>blexa</span>
  </span>
);

// ─── Custom line icons (24×24, stroke 1.5) ───────────────────────────────

const Icon = {
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  search: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="m20 20-3.6-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  layers: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="m12 3 9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="m3 13 9 5 9-5M3 18l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  spark: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6 6l1.5 1.5M16.5 16.5 18 18M6 18l1.5-1.5M16.5 7.5 18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  users: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 11.5a3 3 0 0 0 0-6M21.5 20a5.5 5.5 0 0 0-4-5.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  filter: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  chart: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3 4 6v6c0 4.5 3.4 8.5 8 9 4.6-.5 8-4.5 8-9V6l-8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="m9 12 2.2 2.2L15 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  globe: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" stroke="currentColor" strokeWidth="1.5"/></svg>,
  plus: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  minus: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  star: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 2.5 2.95 6.2 6.8.78-5.05 4.65 1.4 6.7L12 17.7l-6.1 3.13 1.4-6.7L2.25 9.48l6.8-.78L12 2.5z"/></svg>,
  zap: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  flame: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s2 1 2 3c0-3 2-5 2-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  lock: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.5"/></svg>,
  clock: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  warn: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3 2 21h20L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 10v5M12 18v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
};

Object.assign(window, { Logo, Wordmark, Icon });
