import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagination from './pages/pagination/Pagination';
import InfiniteScroller from './pages/infinate/InfiniteScroll';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/infinite-scroll" element={<InfiniteScroller />} />
          {/* <App /> */}
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
