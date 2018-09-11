import axios from 'axios';

const BASE_PATH = '/api/v1';

export const fetchCounters = () => axios
  .get(`${BASE_PATH}/counters`)
  .then(({ data }) => data);

export const test = () => axios
  .get(`${BASE_PATH}/counters`)
  .then(({ data }) => data);
