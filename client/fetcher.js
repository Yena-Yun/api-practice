import axios from 'axios';

// baseURL을 지정 (url 앞에 자동으로 붙음)
axios.defaults.baseURL = 'http://localhost:8000'; /* 서버 url */

// axios를 통해 서버에서 응답을 받아오는 걸 fetcher 함수로 처리
const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest); // 데이터가 하나만 들어와도 처리되도록 spread
  return res.data;
};

export default fetcher;

/*
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config]) //post와 put은 get, delete와 달리 data가 하나 더 들어옴
put: axios.put(url, data[, config])
*/
