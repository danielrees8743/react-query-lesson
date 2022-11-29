import '../../App.css';
import { useQuery } from '@tanstack/react-query';
import Character from '../../components/Character';

const fetchRickandMorty = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  return response.json();
};

function Home() {
  const { data, status } = useQuery(['rickAndMorty'], fetchRickandMorty);

  return (
    <div className="App">
      <h1>React Query</h1>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {data &&
        data.results.map((character) => (
          <div key={character.id}>
            <Character character={character} />
          </div>
        ))}
    </div>
  );
}

export default Home;
