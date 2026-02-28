import { COLORS } from './constants/config';
import { useBubbleSort } from './hooks/useBubbleSort';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import Legend from './components/Legend';
import BarsChart from './components/BarsChart';
import Controls from './components/Controls';
import OperationsLog from './components/OperationsLog';

export default function App() {
  const {
    array, comparing, swapping, sorted,
    isRunning, isDone, step,
    speed, setSpeed,
    log, run, reset,
  } = useBubbleSort();

  return (
    <div style={{
      minHeight: '100vh',
      background: COLORS.BG_MAIN,
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      color: COLORS.TEXT_LIGHT,
      padding: 0,
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&family=Space+Grotesk:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #334; border-radius: 2px; }
        .bar-wrap { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; flex: 1; }
        .bar { width: 100%; border-radius: 3px 3px 0 0; transition: height 0.2s cubic-bezier(.4,0,.2,1), background 0.15s; position: relative; min-height: 4px; }
        .bar-label { font-size: 9px; color: #64748b; margin-top: 4px; text-align: center; transition: color 0.15s; }
        .btn { border: 1px solid #2d3748; background: transparent; color: #94a3b8; padding: 8px 20px; border-radius: 4px; font-family: inherit; font-size: 13px; cursor: pointer; transition: all 0.15s; letter-spacing: 0.05em; }
        .btn:hover { background: #1e2a3a; color: #e2e8f0; border-color: #4a90d9; }
        .btn.primary { background: #1a3a5c; border-color: #4a90d9; color: #7ec8e3; font-weight: 600; }
        .btn.primary:hover { background: #4a90d9; color: #fff; }
        .btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .speed-btn { padding: 6px 14px; font-size: 11px; }
        .speed-btn.active { background: #1a3a5c; border-color: #4a90d9; color: #7ec8e3; }
        .log-entry { padding: 3px 0; font-size: 11px; line-height: 1.5; border-bottom: 1px solid #111; }
        .log-start { color: #7ec8e3; }
        .log-pass { color: #94a3b8; }
        .log-swap { color: #f59e0b; }
        .log-done { color: #4ade80; font-weight: 600; }
        .log-info { color: #64748b; }
        .stat-card { background: #0f1320; border: 1px solid #1e2a3a; border-radius: 6px; padding: 12px 16px; text-align: center; flex: 1; }
        .stat-value { font-size: 22px; font-weight: 700; color: #7ec8e3; }
        .stat-label { font-size: 10px; color: #94a3b8; margin-top: 2px; text-transform: uppercase; letter-spacing: 0.1em; }
        .glow-done { box-shadow: 0 0 30px rgba(74, 222, 128, 0.15); }
      `}</style>

      <Header speed={speed} setSpeed={setSpeed} isRunning={isRunning} />

      <div style={{ display: 'flex', height: 'calc(100vh - 65px)' }}>
        {/* Main area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 28px' }}>
          <StatsBar step={step} />
          <Legend />
          <BarsChart
            array={array}
            comparing={comparing}
            swapping={swapping}
            sorted={sorted}
            isDone={isDone}
          />
          <Controls isRunning={isRunning} isDone={isDone} onRun={run} onReset={reset} />
        </div>

        <OperationsLog log={log} />
      </div>
    </div>
  );
}