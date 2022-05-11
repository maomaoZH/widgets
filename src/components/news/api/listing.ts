import client from './client';

const endPoint =
  '/v2/top-headlines?country=de&apiKey=772b28584eb44916a5e3b1cb1912a386&pageSize=5';

const getNews = () => client.get(endPoint);

export default {
  getNews,
};
