import axios from 'axios';
import { BASE_URL } from './config';

export const getDataAPI = async (url: any, token?: any) => {
  const res = await axios.get(`${BASE_URL}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataAPI = async (url?: any, post?: any, token?: any) => {
  const res = await axios.post(`${BASE_URL}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataAPI = async (url: any, post: any, token: any) => {
  const res = await axios.put(`${BASE_URL}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url: any, post: any, token: any) => {
  const res = await axios.patch(`${BASE_URL}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataAPI = async (url: any, token: any) => {
  const res = await axios.delete(`${BASE_URL}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
