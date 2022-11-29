import './App.css';
import { useQuery } from '@tanstack/react-query';
import Character from './components/Character';

const fetchRickandMorty = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return response.json();
};

function App() {
  const { data, isError, isLoading, error } = useQuery(
    ['rickAndMorty'],
    fetchRickandMorty
  );

  console.log(data && data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="App">
      <h1>React Query</h1>
      {data &&
        data.results.map((character) => (
          <div key={character.id}>
            <Character character={character} />
          </div>
        ))}
    </div>
  );
}

export default App;
