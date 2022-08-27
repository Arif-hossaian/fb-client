import { FC } from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import MainPost from '../components/MainPost';
import TimelineHeader from '../components/TimelineHeader/TimelineHeader';
import Navbar from '../shared/Navbar/Navbar';
import { useSelector } from 'react-redux';

const Home: FC = () => {
  const { homePosts } = useSelector((state: any) => state);
  return (
    <div>
      <Navbar />
      <TimelineHeader />
      <main className=" mx-auto max-w-screen-md">
        <CreatePost />
        {homePosts?.loading ? (
          <p>loading</p>
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center mt-20 mb-20">No Post</h2>
        ) : (
          <MainPost />
        )}
      </main>
    </div>
  );
};

export default Home;
