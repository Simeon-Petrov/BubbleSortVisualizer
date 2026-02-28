import { useState, useRef, useCallback } from 'react';
import { SPEED_MAP } from '../constants/config';
import { generateArray, sleep } from '../utils/arrayUtils';

export function useBubbleSort() {
  const [array, setArray] = useState(generateArray);
  const [comparing, setComparing] = useState([]);
  const [swapping, setSwapping] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [step, setStep] = useState({ pass: 0, index: 0, swaps: 0, comparisons: 0 });
  const [speed, setSpeed] = useState('Normal');
  const [log, setLog] = useState([]);
  const stopRef = useRef(false);

  const addLog = (msg, type = 'info') => {
    setLog((prev) => [
      ...prev.slice(-50),
      { msg, type, id: Date.now() + Math.random() },
    ]);
  };

  const reset = useCallback(() => {
    stopRef.current = true;
    setTimeout(() => {
      setArray(generateArray());
      setComparing([]);
      setSwapping([]);
      setSorted([]);
      setIsRunning(false);
      setIsDone(false);
      setStep({ pass: 0, index: 0, swaps: 0, comparisons: 0 });
      setLog([]);
      stopRef.current = false;
    }, 50);
  }, []);

  const run = useCallback(async () => {
    stopRef.current = false;
    setIsRunning(true);
    setIsDone(false);
    setLog([]);
    setSorted([]);

    const arr = [...array];
    const n = arr.length;
    let swapCount = 0;
    let compareCount = 0;
    const delay = SPEED_MAP[speed];

    addLog(`▶ Starting Bubble Sort on ${n} elements`, 'start');

    for (let pass = 0; pass < n - 1; pass++) {
      if (stopRef.current) break;
      addLog(`— Pass ${pass + 1}`, 'pass');
      let swappedThisPass = false;

      for (let i = 0; i < n - pass - 1; i++) {
        if (stopRef.current) break;

        setStep({ pass: pass + 1, index: i, swaps: swapCount, comparisons: compareCount });
        setComparing([i, i + 1]);
        setSwapping([]);
        compareCount++;

        await sleep(delay);

        if (arr[i] > arr[i + 1]) {
          setSwapping([i, i + 1]);
          addLog(`↕ Swap: ${arr[i]} ↔ ${arr[i + 1]}`, 'swap');
          await sleep(delay * 0.6);
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          setArray([...arr]);
          swapCount++;
          swappedThisPass = true;
        }

        await sleep(delay * 0.4);
        setSwapping([]);
      }

      setSorted((prev) => [...prev, n - pass - 1]);
      setComparing([]);

      if (!swappedThisPass) {
        addLog(`✓ Array is sorted — early stop!`, 'done');
        setSorted(Array.from({ length: n }, (_, k) => k));
        break;
      }
    }

    if (!stopRef.current) {
      setSorted(Array.from({ length: n }, (_, k) => k));
      setComparing([]);
      setSwapping([]);
      setIsRunning(false);
      setIsDone(true);
      setStep((s) => ({ ...s, swaps: swapCount, comparisons: compareCount }));
      addLog(`✅ Done! ${compareCount} comparisons, ${swapCount} swaps`, 'done');
    }
  }, [array, speed]);

  return {
    array,
    comparing,
    swapping,
    sorted,
    isRunning,
    isDone,
    step,
    speed,
    setSpeed,
    log,
    run,
    reset,
  };
}