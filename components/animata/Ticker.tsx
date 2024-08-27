'use client';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedNumber } from './NumberTicker';

export function Ticker() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(300);
  }

  return (
    <div className='' ref={ref}>
      <AnimatedNumber
        className='inline-flex items-center font-bold text-2xl text-zinc-800 dark:text-zinc-50'
        springOptions={{
          bounce: 0,
          duration: 600,
        }}
        value={value}
      />
    </div>
  );
}
