import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../utils/colors';

import Source from '../Source';

function Unit({ unit: { name, age, description, cost } }) {
  return (
    <div className="unit verflow-hidden shadow-md mb-4">
      <div className="w-full lg:flex">
        <div className="px-6 py-4 w-full">
          <div className="flex justify-between items-start text-xl mb-2">
            <span>{name}</span>
            <span
              className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm ml-1 ${colors[age]}`}
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

Unit.propTypes = {
  unit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default Unit;
