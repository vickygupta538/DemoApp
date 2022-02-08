import axios from 'axios';

const get = (url, data) => {
  const endpoint = url + data;
  return axios.get(endpoint);
};

export default get;
