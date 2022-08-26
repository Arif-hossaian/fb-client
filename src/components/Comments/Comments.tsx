import React, { FC, useEffect, useState } from 'react';
import CommentCard from './CommentCard';

const Comments: FC<any> = ({ post }) => {
  const [showComments, setShowComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [next, setNext] = useState(10);

  useEffect(() => {
    const newCm = post.comments.filter((cm: { reply: any }) => !cm.reply);
    setComments(newCm);
    setShowComments(newCm.slice(newCm.length - next));
  }, [post.comments, next]);
  return (
    <div className="w-full space-y-5">
      {showComments.map((comment: { _id: React.Key | null | undefined }) => (
        <CommentCard key={comment._id} comment={comment} post={post} />
      ))}
    </div>
  );
};

export default Comments;
