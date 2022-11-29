import './infiniteScroller.css';
//TODO : Import React Query (useInfiniteQuery)
//TODO : Import Infinite scroll
import Character from '../../components/Character';

const initUrl = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const InfiniteScroller = () => {
  //TODO : useInfiniteQuery to fetch the data from the API

  return (
    <div className="infinite">
      <h1>Infinite Scroll</h1>

      {/* //TODO : Use the InfiniteScroll to component to make the infinite scroll work as it should */}
    </div>
  );
};

export default InfiniteScroller;
