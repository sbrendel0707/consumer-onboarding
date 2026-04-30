/**
 * Horizon Design System — Tailwind Preset
 * WCAG 2.2 Level AA audited
 * Paste this into tailwind.config = { ... } in any prototype's <script> block
 */
const horizonPreset = {
  theme: {
    extend: {
      colors: {
        'hz-indigo':     '#2D1FA3',
        'hz-mid':        '#4A4580',
        'hz-accent':     '#645CDC',
        'hz-cloud':      '#EEF0FF',
        'hz-teal':       '#0D7A55',   // WCAG fix: was #1D9E75 (3.39:1) → 5.34:1 on white
        'hz-teal-bg':    '#E1F5EE',
        'hz-amber':      '#EF9F27',
        'hz-amber-bg':   '#FAEEDA',
        'hz-danger':     '#E24B4A',
        'hz-danger-bg':  '#F7C1C1',
        'hz-bg':         '#F4F5FF',
        'hz-card':       '#FFFFFF',
        'hz-border':     'rgba(100,92,220,0.14)',
        'hz-text':       '#1A1060',   // 15.04:1 on hz-bg
        'hz-muted':      '#57548D',   // WCAG fix: was #6B6899 → 6.33:1 on hz-bg
        'hz-hint':       '#6B6899',   // WCAG fix: was #9896C8 (2.57:1 FAIL) → 4.76:1
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'system-ui', 'sans-serif'],
        mono: ["'DM Mono'", 'monospace'],
      },
      borderRadius: {
        'hz':     '18px',
        'hz-sm':  '12px',
        'hz-pill':'99px',
      },
    },
  },
};
