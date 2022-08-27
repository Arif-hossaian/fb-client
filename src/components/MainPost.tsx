import { FC } from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../shared/PostCard/PostCard';

const MainPost: FC = () => {
  const { homePosts } = useSelector((state: any) => state);
  return (
    <div>
      {homePosts.posts?.map((post: any, id: any) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default MainPost;
