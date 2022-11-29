import './infiniteScroller.css';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-up-n-down';
import Character from '../../components/Character';

const initUrl = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const InfiniteScroller = () => {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['rickAndMortyInfinite'],
    ({ pageParam = initUrl }) => fetchCharacters(pageParam),
    { getNextPageParam: (lastPage) => lastPage.info.next || undefined }
  );

  return (
    <div className="infinite">
      <h1>Infinite Scroll</h1>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        {data &&
          data.pages.map((page) => {
            return page.results.map((character) => (
              <div key={character.id}>
                <Character character={character} key={character.id} />
              </div>
            ));
          })}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScroller;
