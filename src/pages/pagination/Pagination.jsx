import './pagination.css';
// TODO : import the React Query

import Character from '../../components/Character';

const fetchCharacters = async (page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return await response.json();
};

const Pagination = () => {
  //TODO : Set State for initial page

  //TODO : Use React Query to fetch the data from the API

  return (
    <div className="pagination">
      <h1>Pagination</h1>
      {/* //TODO : Set up the buttons for the pagination */}
    </div>
  );
};

export default Pagination;
