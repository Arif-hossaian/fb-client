import { Dispatch } from 'react';
import { checkTokenExp } from '../../utils/checkTokenExp';
import { getDataAPI, postDataAPI } from '../../utils/fetchData';
import { IUserLogin } from '../../utils/Types';
import { ALERT } from '../types/alertType';
import { AUTH } from '../types/authType';

export const login = (data: IUserLogin) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await postDataAPI('login', data);

    dispatch({ type: AUTH, payload: res.data });

    dispatch({ type: ALERT, payload: { success: res.data.message } });
    localStorage.setItem('logged', 'dev');
  } catch (err: any) {
    dispatch({
      type: ALERT,
      payload: {
        error: err.response.data?.message,
      },
    });
  }
};

export const refreshToken = () => async (dispatch: Dispatch<any>) => {
  const logged = localStorage.getItem('logged');
  if (logged !== 'dev') return;

  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await getDataAPI('refresh_token');

    dispatch({ type: AUTH, payload: res.data });

    dispatch({ type: ALERT, payload: {} });
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { error: err.response.data.message } });
    localStorage.removeItem('logged');
  }
};

export const logout = (token: string) => async (dispatch: Dispatch<any>) => {
  const result = await checkTokenExp(token, dispatch);
  const access_token = result ? result : token;

  try {
    localStorage.removeItem('logged');
    dispatch({ type: AUTH, payload: {} });
    await getDataAPI('logout', access_token);
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { error: err.response.data.message } });
  }
};
