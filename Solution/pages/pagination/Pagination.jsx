import './pagination.css';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
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
  const [page, setPage] = useState(1);

  const { data, status, isPreviousData } = useQuery(
    ['rickAndMorty', page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
    }
  );

  if (status === 'loading') {
    return <div style={{ color: 'yellowgreen' }}>Loading data...</div>;
  }

  if (status === 'error') {
    return <div style={{ color: 'red' }}>Error fetching data</div>;
  }

  return (
    <div className="pagination">
      <h1>Pagination</h1>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <span>
        {page} of {data.info.pages}
      </span>
      <button
        onClick={() => {
          if (!isPreviousData && data.info.next) {
            setPage((old) => old + 1);
          }
        }}
        disabled={isPreviousData || !data.info.next}
      >
        Next Page
      </button>
      {data &&
        data.results.map((character) => (
          <div key={character.id}>
            <Character character={character} />
          </div>
        ))}
    </div>
  );
};

export default Pagination;
