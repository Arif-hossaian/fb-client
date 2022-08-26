import { POST_TYPES } from './postAction';
import { postDataAPI } from '../../utils/fetchData';
import { Dispatch } from 'react';
import { ALERT } from '../types/alertType';

export const createComment =
  ({ post, newComment, auth }: any) =>
  async (dispatch: Dispatch<any>) => {
    const newPost = { ...post, comments: [...post.comments, newComment] };

    dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });

    try {
      const data = {
        ...newComment,
        postId: post._id,
        postUserId: post.user._id,
      };
      const res = await postDataAPI('comment', data, auth.access_token);

      const newData = { ...res.data.newComment, user: auth.user };
      const newPost = { ...post, comments: [...post.comments, newData] };
      dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { error: err.response.data.message } });
    }
  };
