![logo](./src/assets/repo-dark-removebg.png)

# React Query

[![npm version](https://badge.fury.io/js/react-query.svg)](https://badge.fury.io/js/react-query)
[![npm](https://img.shields.io/npm/dm/react-query.svg)](https://www.npmjs.com/package/react-query)

React Query is a library for fetching, caching and updating asynchronous data in React. It makes data fetching simple, efficient and declarative. It also provides powerful tools for tracking the status and updating of your data. It is also a great companion to React Query Devtools. It is built on top of the Fetch API and supports all modern browsers.

## Installation

```bash
npm install @tanstack/react-query
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

## Challenge 1

In this challenge, we will be fetching a list of characters from the API. The API endpoint is [https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)

### Step 1

Create a new component called `Characters` and import `useQuery` from `react-query`

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

Create a new query using `useQuery` and pass the `fetchCharacters` function as the first argument. The second argument is an object with the `refetchInterval` property. Set the `refetchInterval` to `1000` to refetch the data every second.

```jsx
const { data, status } = useQuery('characters', fetchCharacters);
```

### Step 4

Create a new component called `Character` and pass the `character` as a prop. The component should return the `name` of the character.

```jsx
const Character = ({ character }) => {
  return <div>{character.name}</div>;
};
```

### Step 5

Create a new component called `CharactersList` and pass the `characters` as a prop. The component should return a list of `Character` components.

```jsx
const CharactersList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};
```

### Step 6

Create a new component called `Characters` and pass the `characters` as a prop. The component should return a list of `Character` components.

```jsx
const Characters = () => {
  const { data, status } = useQuery('characters', fetchCharacters);

  return (
    <div>
      <h2>Characters</h2>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && <CharactersList characters={data.results} />}
    </div>
  );
};
```

### Step 7

Export the `Characters` component and import it in the `App` component.

```jsx
import Characters from './Characters';
```

### Step 8

Render the `Characters` component in the `App` component.

```jsx
function App() {
  return (
    <div className="App">
      <Characters />
    </div>
  );
}
```

### Step 9

Run the app using `npm start` and you should see a list of characters.

<br>
