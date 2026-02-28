import { COLORS } from '../constants/config';

export default function Controls({ isRunning, isDone, onRun, onReset }) {
  return (
    <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
      <button
        className="btn primary"
        onClick={onRun}
        disabled={isRunning || isDone}
        style={{ minWidth: 120 }}
      >
        {isRunning ? '▶ Running...' : isDone ? '✓ Done' : '▶ Start'}
      </button>
      <button className="btn" onClick={onReset} style={{ minWidth: 100 }}>
        ↺ New Array
      </button>
      {isDone && (
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          background: '#052e16',
          border: `1px solid ${COLORS.BAR_SORTED}`,
          borderRadius: 4,
          padding: '0 16px',
          fontSize: 13,
          color: COLORS.BAR_SORTED_BORDER,
        }}>
          ✅ Array is fully sorted!
        </div>
      )}
    </div>
  );
}