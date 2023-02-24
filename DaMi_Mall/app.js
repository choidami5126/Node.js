const express = require('express');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js');
// 설정한 경로에 있는 router를 가져와 goodsRouter 변수에 할당함

app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);

  res.send('기본 URI에 POST 메서드가 정상적으로 실행되었습니다.');
})

app.get('/', (req, res) => {
  console.log(req.query);

  const obj = {
    "key" : "value 입니다.",
    "이름입니다." : "이름일까요?",
    "배포는 어떻게하죠?" : "이산하에게 물어보세요."
  }

  res.json(obj);
})

app.get('/:id', (req, res) => {
  console.log(req.params);

  res.send(':id URI에 정상적으로 반환되었습니다.')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // localhost:3000/api -> goodsRouter
// app.use('/api', goodsRouter);
// 여기부터 통과한 다음에 다음 코드로 넘어가라
// api 라는 경로가 추가된 경우에는 모두 goodsRouter를 통해서 가라.
// 전역 미들웨어로서 라우터를 등록하는 방법
// router들을 모아 배열로 사용 가능하다 [goodsRouter, usersRouter, ...]

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});