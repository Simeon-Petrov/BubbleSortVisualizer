import { COLORS } from '../constants/config';

export default function StatsBar({ step }) {
  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
      <div className="stat-card">
        <div className="stat-value">{step.pass || '—'}</div>
        <div className="stat-label">Pass</div>
      </div>
      <div className="stat-card">
        <div className="stat-value">{step.comparisons}</div>
        <div className="stat-label">Comparisons</div>
      </div>
      <div className="stat-card">
        <div className="stat-value">{step.swaps}</div>
        <div className="stat-label">Swaps</div>
      </div>
      <div className="stat-card" style={{ flex: 2 }}>
        <div style={{ fontSize: 11, color: COLORS.TEXT_MUTED }}>Big O Complexity</div>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 4 }}>
          <span style={{ color: COLORS.COMPLEXITY_WORST, fontSize: 13 }}>Worst: O(n²)</span>
          <span style={{ color: COLORS.COMPLEXITY_AVG, fontSize: 13 }}>Avg: O(n²)</span>
          <span style={{ color: COLORS.COMPLEXITY_BEST, fontSize: 13 }}>Best: O(n)</span>
        </div>
      </div>
    </div>
  );
}