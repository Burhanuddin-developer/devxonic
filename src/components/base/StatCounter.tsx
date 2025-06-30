'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  stats: {
    value: number;
    suffix?: string;
    label: string;
  }[];
}

const StatCounter: React.FC<StatCounterProps> = ({ stats }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className=" border border-white rounded-3xl w-full md:mt-30 py-16 px-6  flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-white/80 space-y-10 md:space-y-0 "
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center px-8 space-y-3 py-5  section-container">
          <div className="text-6xl md:text-6xl font-semibold mb-2 text-white">
            {inView && <CountUp end={stat.value} duration={2} />} {stat.suffix}
          </div>
          <div className="text-lg md:text-xl text-white font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCounter;
