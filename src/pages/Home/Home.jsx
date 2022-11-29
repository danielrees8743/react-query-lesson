import '../../App.css';
//TODO : Import React Query

import Character from '../../components/Character';

const fetchRickandMorty = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  return response.json();
};

function Home() {
  //TODO : Use React Query to fetch the data from the API

  return (
    <div className="App">
      <h1>React Query</h1>
      {/* //TODO : Use the Character component to display the character */}
    </div>
  );
}

export default Home;
