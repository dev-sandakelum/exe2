import React from 'react'

export function Badge1({type}: {type: string}) {
  const types = ['NexNova', 'NexGuard', 'NexPrime', 'NexApex', 'NexRoot'];
  const colors: {[key: string]: string} = {
    'NexNova': 'bg-blue-500 text-white',
    'NexGuard': 'bg-green-500 text-white',
    'NexPrime': 'bg-purple-500 text-white',
    'NexApex': 'bg-yellow-500 text-black',
    'NexRoot': 'bg-red-500 text-white',
  };
  const badgeType = type ;
  const badgeColor = colors[badgeType];
  return (
    <div className={`px-3 h-4 py-0.5 flex items-center justify-center rounded-full text-xs font-semibold ${badgeColor}`}>
      {badgeType}
    </div>
  );
}
