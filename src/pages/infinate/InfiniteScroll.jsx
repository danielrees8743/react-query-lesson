import './infiniteScroller.css';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-up-n-down';
import Character from '../../components/Character';

const initUrl = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return await response.json();
};

const InfiniteScroller = () => {
  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['rickAndMorty'],
      ({ pageParam = initUrl }) => fetchCharacters(pageParam),
      { getNextPageParam: (lastPage) => lastPage.info.next || undefined }
    );

  if (isLoading) return <div>Loading data...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="infinite">
      <h1>Infinite Scroll</h1>
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        {data &&
          data.pages.map((page) => {
            return page.results.map((character) => (
              <div key={character.id}>
                <Character character={character} />
              </div>
            ));
          })}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScroller;
