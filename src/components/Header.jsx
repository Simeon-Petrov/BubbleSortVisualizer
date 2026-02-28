import { COLORS } from '../constants/config';

export default function Header({ speed, setSpeed, isRunning }) {
  return (
    <div style={{
      background: COLORS.BG_PANEL,
      borderBottom: `1px solid ${COLORS.BORDER}`,
      padding: '16px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 22,
        fontWeight: 700,
        color: COLORS.TEXT_LIGHT,
        letterSpacing: '-0.02em',
      }}>
        Bubble Sort{' '}
        <span style={{ color: COLORS.ACCENT, fontSize: 14, fontWeight: 400 }}>
          Visualizer
        </span>
      </h1>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 10, color: COLORS.TEXT_DIM, marginRight: 4 }}>
          SPEED:
        </span>
        {['Slow', 'Normal', 'Fast'].map((s) => (
          <button
            key={s}
            className={`btn speed-btn ${speed === s ? 'active' : ''}`}
            onClick={() => setSpeed(s)}
            disabled={isRunning}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}