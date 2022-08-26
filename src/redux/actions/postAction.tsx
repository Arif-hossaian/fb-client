import { Dispatch } from 'react';
import {
  postDataAPI,
  getDataAPI,
  patchDataAPI,
  deleteDataAPI,
} from '../../utils/fetchData';

export const POST_TYPES = {
  CREATE_POST: 'CREATE_POST',
  LOADING_POST: 'LOADING_POST',
  GET_POSTS: 'GET_POSTS',
  UPDATE_POST: 'UPDATE_POST',
  GET_POST: 'GET_POST',
  DELETE_POST: 'DELETE_POST',
};
const ALERT = 'ALERT';

export const createPost =
  ({ content, auth }: any) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } });

      const res = await postDataAPI(
        'create_post',
        { content },
        auth.access_token
      );

      dispatch({
        type: POST_TYPES.CREATE_POST,
        payload: { ...res.data.newPost, user: auth.user },
      });

      dispatch({ type: ALERT, payload: { loading: false } });
    } catch (err: any) {
      dispatch({
        type: ALERT,
        payload: { error: err.response.data.message },
      });
    }
  };

export const getPosts = (token: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: POST_TYPES.LOADING_POST, payload: true });
    const res = await getDataAPI('posts', token);

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: 2 },
    });

    dispatch({ type: POST_TYPES.LOADING_POST, payload: false });
  } catch (err: any) {
    dispatch({
      type: ALERT,
      payload: { error: err.response.data.message },
    });
  }
};

export const likePost =
  ({ post, auth }: any) =>
  async (dispatch: Dispatch<any>) => {
    const newPost = { ...post, likes: [...post.likes, auth.user] };
    dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });

    try {
      await patchDataAPI(`post/${post._id}/like`, null, auth.access_token);
    } catch (err: any) {
      dispatch({
        type: ALERT,
        payload: { error: err.response.data.message },
      });
    }
  };

export const unLikePost =
  ({ post, auth }: any) =>
  async (dispatch: Dispatch<any>) => {
    const newPost = {
      ...post,
      likes: post.likes.filter((like: any) => like._id !== auth.user._id),
    };
    dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });

    try {
      await patchDataAPI(`post/${post._id}/unlike`, null, auth.access_token);
    } catch (err: any) {
      dispatch({
        type: ALERT,
        payload: { error: err.response.data.message },
      });
    }
  };

export const getPost =
  ({ detailPost, id, auth }: any) =>
  async (dispatch: Dispatch<any>) => {
    if (detailPost.every((post: any) => post._id !== id)) {
      try {
        const res = await getDataAPI(`post/${id}`, auth.access_token);
        dispatch({ type: POST_TYPES.GET_POST, payload: res.data.post });
      } catch (err: any) {
        dispatch({
          type: ALERT,
          payload: { error: err.response.data.message },
        });
      }
    }
  };

export const deletePost =
  ({ post, auth }: any) =>
  async (dispatch: Dispatch<any>) => {
    dispatch({ type: POST_TYPES.DELETE_POST, payload: post });

    try {
      const res = await deleteDataAPI(`post/${post._id}`, auth.access_token);
      dispatch({ type: POST_TYPES.DELETE_POST, payload: res.data.message });
    } catch (err: any) {
      dispatch({
        type: ALERT,
        payload: { error: err.response.data.message },
      });
    }
  };
