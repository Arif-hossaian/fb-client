import React, { FC, useEffect, useState } from 'react';
import MoreIcon from '../../icons/MoreIcon';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, unLikePost } from '../../redux/actions/postAction';
import { AppDispatch } from '../../redux/store';
import LikeButton from '../LikeButton/LikeButton';
import Comments from '../../components/Comments/Comments';
import CommentInput from '../CommentInput/CommentInput';

const PostCard: FC<any> = ({ post }) => {
  const [readMore, setReadMore] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);
  const { auth } = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (post.likes.find((like: { _id: any }) => like._id === auth.user._id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [post.likes, auth.user._id]);

  const handleLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(likePost({ post, auth }));
    setLoadLike(false);
  };

  const handleUnLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(unLikePost({ post, auth }));
    setLoadLike(false);
  };
  return (
    <div className="w-full shadow-fb rounded bg-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={post.user?.profile_picture}
            alt="img"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-4">
            <span className="cursor-pointer font-bold">
              {post.user?.username}
            </span>{' '}
            <br />
            <span className="text-fGrey text-opacity-50 text-sm">
              {' '}
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
        </div>
        <button className="w-9 h-9 rounded-full bg-fFill flex items-center justify-center focus:outline-none">
          <MoreIcon />
        </button>
      </div>
      <div className="w-full mt-4">
        {post.content.length < 60
          ? post.content
          : readMore
          ? post.content + ' '
          : post.content.slice(0, 60) + '.....'}
      </div>

      <div className="flex justify-between mt-4 items-center text-fGrey text-opacity-50">
        <div> {post.likes.length} likes</div>
        <div>{post.comments.length} comments</div>
      </div>
      <div className="border border-fGray border-opacity-10 mt-4" />
      <div className="flex justify-between items-center mt-4">
        <LikeButton
          isLike={isLike}
          handleLike={handleLike}
          handleUnLike={handleUnLike}
        />
        <button className="w-1/2 flex items-center justify-center focus:outline-none">
          {/* <CommentButton /> */}
          <span className="ml-1">Comment</span>
        </button>
      </div>
      <div className="border border-fGray border-opacity-10 mt-4" />
      <div className="flex items-center space-x-2 mt-4">
        <img
          src={auth.user?.profile_picture}
          alt="img"
          className="h-10 w-10 rounded-full"
        />
        {/* <Comments post={post} /> */}
        <CommentInput post={post} />
      </div>
    </div>
  );
};

export default PostCard;
