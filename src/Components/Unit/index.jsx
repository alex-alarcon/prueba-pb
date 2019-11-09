import React from 'react';

import colors from '../../utils/colors';

import Source from '../Source';

function Unit({ unit: { name, age, description, cost } }) {
  return (
    <div className="max-w-sm overflow-hidden shadow-md">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="px-6 py-4 w-full">
          <div className="flex justify-between font-bold text-xl mb-2">
            <span>{name}</span>
            <span
              className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-grey-800 ${colors[age]}`}
            >
              {age}
            </span>
          </div>
          <div className="flex items-center mt-2 w-full">
            <Source cost={cost} />
          </div>
          <hr className="my-2" />
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Unit;
