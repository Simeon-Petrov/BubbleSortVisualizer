import { ARRAY_SIZE, MIN_VAL, MAX_VAL } from '../constants/config';


export function generateArray() {
  return Array.from(
    { length: ARRAY_SIZE },
    () => Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1)) + MIN_VAL
  );
}


export function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}