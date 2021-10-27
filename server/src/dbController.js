import fs from 'fs'; /* fs: node.js의 파일시스템이 모여있는 곳 */
import { resolve } from 'path'; /* path의 resolve도 node.js에 내장되어 있는 것 */

// 현재 경로 (기본 경로)
const basePath = resolve();

// 각각의 db(json)를 resolve로 가져와서 객체에 특정 키값(= target)으로 담음
const filenames = {
  messages: resolve(basePath, 'src/db/messages.json'),
  users: resolve(basePath, 'src/db/users.json'),
};

// ** 파일을 read하거나 write (각각 export로 바로 내보냄)
// 파일을 read (json에 저장된 내용을 읽어옴)
// messages.json을 읽어올지, users.json을 읽어올지를 target이라는 변수로 받아와서 (target = 'messages' 또는 'users')
export const readDB = (target) => {
  // 읽어올 때 에러 발생 가능 => try/catch로 대비
  try {
    // fs(파일시스템)로부터 readFileSync 실행
    // (filenames 객체에서 target 키에 해당하는 value값을 불러옴, 이때 'utf-8'로 인코딩 명시를 해줘야 내용이 안 깨짐)
    // + 파일을 읽어올 때 json 형태로 읽어옴 => 이걸 자바스크립트 문법으로 바꾸기 위해 JSON.parse
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'));

    // 에러 핸들링
  } catch (err) {
    console.error(err);
  }
};

// 파일을 write (json 형태로 저장)
// target만 지정하는 게 아니라 새로 덮어씌울 data도 필요
export const writeDB = (target, data) => {
  // 저장할 때 에러 발생 가능 => try/catch로 대비
  try {
    // fs로부터 writeFileSync 실행
    // 가져온 data가 자바스크립트 문법이므로 JSON.stringify로 json화 해줌
    return fs.writeFileSync(filename[target], JSON.stringify(data));

    // 에러 핸들링
  } catch (err) {
    console.error(err);
  }
};
