import { COLORS } from '../constants/config';

const LEGEND_ITEMS = [
  { color: '#3b82f6', label: 'Default' },
  { color: COLORS.BAR_COMPARING_BORDER, label: 'Comparing' },
  { color: COLORS.BAR_SWAPPING_BORDER, label: 'Swapping' },
  { color: COLORS.BAR_SORTED_BORDER, label: 'Sorted' },
];

export default function Legend() {
  return (
    <div style={{ display: 'flex', gap: 16, marginBottom: 12, fontSize: 11 }}>
      {LEGEND_ITEMS.map(({ color, label }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
          <span style={{ color: COLORS.TEXT_MUTED }}>{label}</span>
        </div>
      ))}
    </div>
  );
}