import axios from 'axios';
const BASE_PATH = '/api/v1';

export const getCounters = () =>
  axios.get(`${BASE_PATH}/counters`)
    .then(({ data }) => data);