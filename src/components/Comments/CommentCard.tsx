import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';

const CommentCard: FC<any> = ({ comment }) => {
  const { auth } = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(comment.content);
  }, [comment, auth.user._id]);
  return (
    <div>
      <div className=" w-44 shadow-fb rounded bg-white p-4">
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
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-fFill flex items-center justify-center focus:outline-none">
            delete
          </button>
        </div>
        <div className="w-full mt-4">{comment?.length}</div>
      </div>
    </div>
  );
};

export default CommentCard;
