import React, { FC, useEffect, useState } from 'react';
import CommentDisplay from './CommentDisplay';

const Comments: FC<any> = ({ post }) => {
  const [showComments, setShowComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [next, setNext] = useState(2);

  useEffect(() => {
    const newCm = post.comments.filter((cm: { reply: any }) => !cm.reply);
    setComments(newCm);
    setShowComments(newCm.slice(newCm.length - next));
  }, [post.comments, next]);
  return (
    <div>
      {showComments.map((comment: { _id: React.Key | null | undefined }) => (
        <CommentDisplay key={comment._id} comment={comment} post={post} />
      ))}
      {comments.length}
    </div>
  );
};

export default Comments;
