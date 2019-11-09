import React from 'react';

import icons from '../../utils/icons';

function Pill({ icon, text }) {
  return (
    <span className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 mr-2 text-xs  text-gray-700">
      <img className="inline-block h-6" src={icons[icon]} alt={icon} />
      <span className="ml-2">{text}</span>
    </span>
  );
}

export default Pill;
