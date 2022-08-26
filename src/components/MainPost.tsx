import { FC, Key } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoreIcon from '../icons/MoreIcon';
import { AppDispatch } from '../redux/store';
import PostCard from '../shared/PostCard/PostCard';

const MainPost: FC = () => {
  const { homePosts, auth } = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      {homePosts.posts?.map((post: any, id: any) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default MainPost;
