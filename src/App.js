import './App.css';
import { useQuery } from '@tanstack/react-query';

const fetchRickandMorty = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  console.log(response);
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return response.json();
};

function App() {
  const { data, isError, isLoading } = useQuery(
    ['rickAndMorty'],
    fetchRickandMorty
  );

  if (isLoading) return <div>Loading data...</div>;
  if (isError) return <div>Error fetching data</div>;

  console.log(data);

  return (
    <div className="App">
      <h1>React Query</h1>
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
