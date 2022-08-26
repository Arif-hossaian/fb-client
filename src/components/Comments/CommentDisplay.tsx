import React, { FC } from 'react';
import CommentCard from './CommentCard';

const CommentDisplay: FC<any> = ({ comment }) => {
  return (
    <>
      <CommentCard comment={comment} />
    </>
  );
};

export default CommentDisplay;
