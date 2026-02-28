import { useEffect, useRef } from 'react';
import { COLORS } from '../constants/config';

export default function OperationsLog({ log }) {
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <div style={{
      width: 240,
      background: COLORS.BG_PANEL,
      borderLeft: `1px solid ${COLORS.BORDER}`,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Title */}
      <div style={{
        padding: '12px 16px',
        borderBottom: `1px solid ${COLORS.BORDER}`,
        fontSize: 12,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: COLORS.TEXT_DIM,
      }}>
        Operations
      </div>

      {/* Log entries */}
      <div ref={logRef} style={{ flex: 1, overflowY: 'auto', padding: '8px 16px' }}>
        {log.length === 0 && (
          <div style={{ fontSize: 11, color: COLORS.TEXT_DIM, marginTop: 12 }}>
            Press "Start" to see the log...
          </div>
        )}
        {log.map((entry) => (
          <div key={entry.id} className={`log-entry log-${entry.type}`}>
            {entry.msg}
          </div>
        ))}
      </div>

      {/* How it works */}
      <div style={{
        padding: '12px 16px',
        borderTop: `1px solid ${COLORS.BORDER}`,
        fontSize: 10,
        color: COLORS.TEXT_DIM,
        lineHeight: 1.7,
      }}>
        <div style={{
          color: COLORS.TEXT_DIM,
          marginBottom: 6,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          How it works
        </div>
        Compares adjacent elements and swaps them if they are in the wrong order.
        After each pass, the largest unsorted element "bubbles up" to its correct position.
      </div>
    </div>
  );
}