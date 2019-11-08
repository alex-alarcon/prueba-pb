import React from 'react';

import './App.css';

import useApi from '../../hooks/useApi';

function App() {
  const [data, isLoading, error] = useApi();

  if (isLoading) return <p>Loading..</p>;

  if (!isLoading && error) return <p>Something went wrong!</p>;

  if (!isLoading && data !== null) return <pre>{JSON.stringify(data)}</pre>;

  return null;
}

export default App;
