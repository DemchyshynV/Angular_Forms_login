import {environment} from '../../environments/environment';

const api = environment.API;
const users = `${api}/users`;

export const URL = {
  api, users
};
