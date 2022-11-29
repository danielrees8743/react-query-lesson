import './index.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagination from './pages/pagination/Pagination';
import InfiniteScroller from './pages/infinite/InfiniteScroll';
import Home from './pages/Home/Home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/infinite-scroll" element={<InfiniteScroller />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={true} position="bottom-left" />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
