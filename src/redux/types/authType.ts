import { IUser } from '../../utils/Types';

export const AUTH = 'AUTH';

export interface IAuth {
  msg?: string;
  access_token?: any;
  user?: IUser;
}

export interface IAuthType {
  type?: typeof AUTH;
  payload?: IAuth;
}
