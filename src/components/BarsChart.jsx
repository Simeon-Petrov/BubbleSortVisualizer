import { COLORS } from '../constants/config';

export default function BarsChart({ array, comparing, swapping, sorted, isDone }) {
  const maxVal = Math.max(...array);

  return (
    <div
      className={isDone ? 'glow-done' : ''}
      style={{
        flex: 1,
        background: COLORS.BG_PANEL,
        border: `1px solid ${COLORS.BORDER}`,
        borderRadius: 8,
        padding: '16px 12px 8px',
        display: 'flex',
        alignItems: 'flex-end',
        gap: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines */}
      {[25, 50, 75, 100].map((p) => (
        <div key={p} style={{
          position: 'absolute',
          left: 12,
          right: 12,
          bottom: `${8 + (p / maxVal) * 85}%`,
          borderTop: '1px dashed #1a2030',
          pointerEvents: 'none',
        }} />
      ))}

      {array.map((val, i) => {
        const isComparing = comparing.includes(i);
        const isSwapping = swapping.includes(i);
        const isSorted = sorted.includes(i);
        const heightPct = (val / maxVal) * 50;

        let color = COLORS.BAR_DEFAULT;
        let glow = 'none';
        let borderColor = COLORS.BAR_DEFAULT_BORDER;

        if (isSorted) {
          color = COLORS.BAR_SORTED;
          glow = '0 0 8px rgba(74,222,128,0.3)';
          borderColor = COLORS.BAR_SORTED_BORDER;
        }
        if (isComparing) {
          color = COLORS.BAR_COMPARING;
          glow = '0 0 12px rgba(245,158,11,0.4)';
          borderColor = COLORS.BAR_COMPARING_BORDER;
        }
        if (isSwapping) {
          color = COLORS.BAR_SWAPPING;
          glow = '0 0 16px rgba(239,68,68,0.5)';
          borderColor = COLORS.BAR_SWAPPING_BORDER;
        }

        return (
          <div key={i} className="bar-wrap">
            <div
              className="bar"
              style={{
                height: `${heightPct}%`,
                background: color,
                border: `1px solid ${borderColor}`,
                boxShadow: glow,
              }}
            />
            <div
              className="bar-label"
              style={{ color: isComparing || isSwapping ? COLORS.TEXT_LIGHT : undefined }}
            >
              {val}
            </div>
          </div>
        );
      })}
    </div>
  );
}