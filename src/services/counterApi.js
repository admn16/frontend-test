import axios from 'axios';

const BASE_PATH = '/api/v1';

export const fetchCounters = () => axios
  .get(`${BASE_PATH}/counters`)
  .then(({ data }) => data);

export const addCounter = title => axios
  .post(`${BASE_PATH}/counter`, { title })
  .then(({ data }) => data);

export const incrementCounter = id => axios
  .post(`${BASE_PATH}/counter/inc`, { id })
  .then(({ data }) => data);

export const decrementCounter = id => axios
  .post(`${BASE_PATH}/counter/dec`, { id })
  .then(({ data }) => data);

export const deleteCounter = id => axios({
  url: `${BASE_PATH}/counter`,
  method: 'delete',
  data: {
    id,
  },
})
  .then(({ data }) => data);
