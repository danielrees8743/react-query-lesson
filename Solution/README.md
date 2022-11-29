![logo](../src/assets/repo-dark-removebg.png)

# React Query

[![npm version](https://badge.fury.io/js/react-query.svg)](https://badge.fury.io/js/react-query)
[![npm](https://img.shields.io/npm/dm/react-query.svg)](https://www.npmjs.com/package/react-query)

React Query is a library for fetching, caching and updating asynchronous data in React. It makes data fetching simple, efficient and declarative. It also provides powerful tools for tracking the status and updating of your data. It is also a great companion to React Query Devtools. It is built on top of the Fetch API and supports all modern browsers.

## Installation

```bash
npm install @tanstack/react-query
```

## Installation for Devtools

```bash
npm install @tanstack/react-query-devtools
```

---

## Documentation

[https://react-query.tanstack.com](https://react-query.tanstack.com)

---

## Available Scripts

```bash
npm install
```

install all dependencies

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

<br>

# React Query Challenges

We will be using the Rick and Morty API to fetch some data using React Query. The API is available at [https://rickandmortyapi.com/](https://rickandmortyapi.com/)
<br>

## There are three challenges in this repo

1. Fetching a list of characters from the API
2. Pagination, fetching more characters with button click
3. Infinite scrolling, fetching more characters as you scroll down

The challenges are tough but you can do it. You can also check out the solutions in the `solutions` branch.

<br>

# Challenge 1

### Work from the `Home.jsx` file in the `src/pages/Home` folder

In this challenge, we will be fetching a list of characters from the API. The API endpoint is [https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)

### Step 1

Import `useQuery` from `react-query`

```jsx
import { useQuery } from '@tanstack/react-query';
```

### Step 2

Create a new function called `fetchCharacters` and use `fetch` to fetch the data from the API. The function should return the data from the API.

```jsx
const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  return res.json();
};
```

### Step 3

Create a new query using `useQuery` and pass the `fetchCharacters` function as the first argument inside your Home component.

```jsx
const { data, status } = useQuery(['rickAndMorty'], fetchCharacters);
```

### Step 4

Import the Character component from `src/components/Character` and render the data in the `Character` component. You can use the status results to render a loading message or a error message.

```jsx
const Home = () => {
  const { data, status } = useQuery(['rickAndMorty'], fetchCharacters);

  return (
    <div>
      <h2>Characters</h2>
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
};
```

### Step 5

If you have done everything correctly, you should see a list of characters on the page. 🥳

<br>

# Challenge 2 - Pagination

### Work from the `Pagination` file in the `src/pages/pagination` folder

In this challenge, we will be fetching more characters with a button click. The API endpoint is [https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)

### Step 1

Import `useQuery` from `react-query`

```jsx
import { useQuery } from '@tanstack/react-query';
```

### Step 2

Create a new function called `fetchCharacters` and use `fetch` to fetch the data from the API. The function should return the data from the API. As an argument to the fetchCharacters function, we will pass the page number.

```jsx
const fetchCharacters = async (page) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${page}`);
  return res.json();
};
```

### Step 3

We need to set the initial page to 1. Create a new state called `page` and set the initial value to 1. Which means we will be fetching the first page of characters. This will be passed into the fetchCharacters function.

```jsx
const [page, setPage] = useState(1);
```

### Step 4

Create a new query using `useQuery` and pass the `fetchCharacters` function as the first argument. We will also pass the page number as the second argument.

```jsx
const { data, status } = useQuery(['rickAndMorty', page], () =>
  fetchCharacters(page)
);
```

### Step 5

As an option to the `useQuery` hook, we will pass an object with the `keepPreviousData` property set to `true`. This will keep the previous data while fetching the next page.

```jsx
const { data, status } = useQuery(
  ['characters', page],
  () => fetchCharacters(page),
  {
    keepPreviousData: true,
  }
);
```

### Step 6

You should see a list of characters on the page. Now we need to create a button to fetch more characters. Create a new function called `handleNextPage` and increment the page number by 1.

```jsx
<button onClick={() => setPage((old) => old - 1)} disabled={page === 1}>
  Previous Page
</button>
```

### Step 7

You should see a list of characters on the page. Now we need to create a button to fetch more characters. Create a new function called `Previous Page` and decrement the page number by 1.

```jsx
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
```

### Step 8

Test out the app. You should be able to fetch more characters with the button click, and the previous data should be kept while fetching the next page 👏

<br>

# Challenge 3 - Infinite Scrolling

 <br>

### Work from the `InfiniteScrolling` file in the `src/pages/infinite-scrolling` folder

In this challenge, we will be fetching more characters as you scroll down. The API endpoint is [https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)

### Step 1

Import `useInfiniteQuery` from `react-query`

```jsx
import { useInfiniteQuery } from '@tanstack/react-query';
```

### Step 2

```jsx
import InfiniteScroll from 'react-infinite-scroll-up-n-down';
```

### Step 3

Declare a variable with the initial url of the API endpoint.

```jsx
const initialUrl = 'https://rickandmortyapi.com/api/character/';
```

### Step 4

Create a new function called `fetchCharacters` and use `fetch` to fetch the data from the API. The function should return the data from the API. As an argument to the fetchCharacters function, we will pass the page number.

```jsx
const fetchCharacters = async (url) => {
  const res = await fetch(url);
  return res.json();
};
```

### Step 5

Create a new query using `useInfiniteQuery` and pass the `fetchCharacters` function as the first argument. We will also pass the initial url as the second argument.

```jsx
const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
  ['rickAndMortyInfinite'],
  (pageParam = initUrl) => fetchCharacters(pageParam),
  {
    getNextPageParam: (lastPage) => lastPage.info.next || undefined,
  }
);
```

### Step 6

Use the InfiniteScroll component and pass the `fetchNextPage` function as the `loadMore` prop. Also pass the `hasNextPage` as the `hasMore` prop.

```jsx
<InfiniteScroll
  loadMore={fetchNextPage}
  hasMore={hasNextPage}
  loader={<div>Loading...</div>}
>
  {data.pages.map((page) =>
    page.results.map((character) => (
      <div key={character.id}>
        <Character character={character} />
      </div>
    ))
  )}
</InfiniteScroll>
```

### Step 7

Test out the app. You should be able to fetch more characters as you scroll down 👏
