var axios = require('axios').default;
const apiKey = '64f3641d91bdf5413f825edf5a83158d';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGYzNjQxZDkxYmRmNTQxM2Y4MjVlZGY1YTgzMTU4ZCIsInN1YiI6IjYxYWI5ODA0ZmU1YzkxMDA2MmQwNmY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.opoqExkm2S-uYTx1xmx2fsiC8JWy52JwStQ0k8vn97U';
export const dev = {
  axios_option: {
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGYzNjQxZDkxYmRmNTQxM2Y4MjVlZGY1YTgzMTU4ZCIsInN1YiI6IjYxYWI5ODA0ZmU1YzkxMDA2MmQwNmY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.opoqExkm2S-uYTx1xmx2fsiC8JWy52JwStQ0k8vn97U',
    },
  },
};
const axios_option = dev.axios_option;
const instance = axios.create(axios_option);
instance.interceptors.request.use(
  (request: any) => {
    return request;
  },
  (error: any) => {
    console.log('ERROR IN [instance.interceptors.request.use]: ', error);
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error: any) => {
    const err = {
      url: error.toJSON().config.baseURL,
      body: JSON.parse(error.toJSON().config.data),
      status: error.toJSON().status,
      message: error.toJSON().message,
    };
    console.log('ERROR-INTERCEPTOR::::', err);
    return Promise.reject(error);
  },
);
export {instance as axios};
