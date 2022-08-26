import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import moment from 'moment';

const CommentCard: FC<any> = ({ comment }) => {
  const { auth } = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(comment.content);
  }, [comment, auth.user._id]);
  return (
    <div>
      <div className=" w-full shadow-fb rounded bg-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={comment.user?.profile_picture}
              alt="img"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4">
              <span className="cursor-pointer font-bold">
                {comment.user?.username}
              </span>{' '}
              <br />
              <span className="text-fGrey text-opacity-50 text-sm">
                {' '}
                {moment(comment?.createdAt).fromNow()}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-4">{comment?.content}</div>
      </div>
    </div>
  );
};

export default CommentCard;
