import { AUTH } from '../types/authType';

const initialState = {};

const authReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
