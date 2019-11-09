import React from 'react';

import Pill from '../Pill';

function Source({ cost }) {
  if (cost.Provides) {
    return (
      <>
        <Pill icon="Food" text={cost.Provides.Food} />
        <Pill icon="Resource Decay" text={cost.Provides['Resource Decay']} />
      </>
    );
  }

  let sources = '';

  sources = Object.keys(cost).map(item => (
    <Pill key={`Pill-${item}__${cost[item]}`} icon={item} text={cost[item]} />
  ));

  return sources;
}

export default Source;
