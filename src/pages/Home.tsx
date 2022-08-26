import React from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import MainPost from '../components/MainPost';
import TimelineHeader from '../components/TimelineHeader/TimelineHeader';
import Navbar from '../shared/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <TimelineHeader />
      <main className=" mx-auto max-w-screen-md">
        <CreatePost />
        <MainPost />
      </main>
    </div>
  );
};

export default Home;
