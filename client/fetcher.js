import axios from 'axios';

// axios의 기본 baseURL을 지정 (=> url 앞에 자동으로 붙음)
axios.defaults.baseURL = 'http://localhost:8000'; /* 서버 url */

// 전달된 method, url, ...rest를 axios로 처리하여 서버에서 응답(res) 받아오는 함수
const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  // 받아온 응답에서 data를 꺼내 반환
  return res.data;
};

export default fetcher;

/*
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config]) //post와 put은 get, delete와 달리 data가 추가됨
put: axios.put(url, data[, config])
*/
