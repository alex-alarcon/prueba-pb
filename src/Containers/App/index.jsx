import React from 'react';

import './App.css';

import useApi from '../../hooks/useApi';

import Unit from '../../Components/Unit';

function App() {
  const [data, isLoading, error] = useApi();

  if (isLoading) return <p>Loading..</p>;

  if (!isLoading && error) return <p>Something went wrong!</p>;

  if (!isLoading && data !== null) {
    return data.units.map(unitData => <Unit unit={unitData} />);
  }

  return null;
}

export default App;
