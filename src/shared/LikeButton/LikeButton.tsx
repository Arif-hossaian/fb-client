import React, { FC } from 'react';
import LIkeIcon from '../../icons/LIkeIcon';
import UnLikeIcon from '../../icons/UnLikeIcon';

const LikeButton: FC<any> = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <div>
      {isLike ? (
        <button
          className="w-1/2 flex items-center justify-center focus:outline-none"
          onClick={handleUnLike}
        >
          {/* <SLike /> */}
          <span className="ml-1">Unlike</span>
        </button>
      ) : (
        <button
          className="w-1/2 flex items-center justify-center focus:outline-none"
          onClick={handleLike}
        >
          {/* <SLike /> */}
          <span className="ml-1">Like</span>
        </button>
      )}
    </div>
  );
};

export default LikeButton;
