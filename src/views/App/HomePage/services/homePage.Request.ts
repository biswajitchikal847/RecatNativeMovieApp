import {axios} from '../../../../apis/setup.interceptor';

export const HomePgaeRequest = () => {
  return axios({
    method: 'GET',
    url: '/popular',
    data: {},
  });
};
