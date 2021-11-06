import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NewsFeed from './components/NewsFeed/NewsFeed';
import NotFound from './components/NotFound/NotFound'
import Post from './components/Post/Post';


function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news-feed" element={<NewsFeed />} />
          <Route path="/post/:idd" element={<Post />} />
          {/* <Route /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
