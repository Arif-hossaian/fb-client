import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../redux/actions/commentAction';
import { AppDispatch } from '../../redux/store';

const CommentInput: FC<any> = ({ post, children }) => {
  const [content, setContent] = useState('');

  const { auth } = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!content.trim()) return;
    setContent('');
    const newComment = {
      content,
      likes: [],
      user: auth.user,
      createdAt: new Date().toISOString(),
    };
    dispatch(createComment({ post, newComment, auth }));
  };
  return (
    <form
      className="w-full flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      {children}
      <input
        className="bg-fFill px-4 py-3 w-full focus:outline-none rounded-full"
        placeholder="Add comments"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-5"
        type="submit"
      >
        Post
      </button>
    </form>
  );
};

export default CommentInput;
