import React from 'react';

import './App.css';

import useApi from '../../hooks/useApi';

import Unit from '../../Components/Unit';
import Loader from '../../Components/Loader';

function App() {
  const [data, isLoading, error] = useApi();

  if (isLoading) return <Loader />;

  if (!isLoading && error) return <p>Something went wrong!</p>;

  if (!isLoading && data !== null) {
    return (
      <div className="grid bg-gray-100">
        {data.units.map(unitData => (
          <Unit key={unitData.id} unit={unitData} />
        ))}
      </div>
    );
  }

  return null;
}

export default App;
