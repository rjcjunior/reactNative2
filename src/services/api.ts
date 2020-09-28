import axios from 'axios';

const api = axios.create({
  baseURL: 'https://application-mock-server.loca.lt',
});

export default api;
