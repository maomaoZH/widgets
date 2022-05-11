import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://newsapi.org',
});

export default apiClient;
