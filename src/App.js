import './App.css';
import { useQuery } from '@tanstack/react-query';

const fetchRickandMorty = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return await response.json();
};

function App() {
  const { data, status } = useQuery(['rickAndMorty'], fetchRickandMorty);

  console.log(data);

  return (
    <div className="App">
      <h1>React Query</h1>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {data &&
        data.results.map((character) => (
          <div key={character.id} className="characters">
            <p>
              {character.name} - <span>{character.species}</span>
            </p>
            <img src={character.image} alt="" />
          </div>
        ))}
    </div>
  );
}

export default App;
