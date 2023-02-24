const express = require('express');
// express 라는 라이브러리에서 라이브러리를 express란 변수에 할당 받고
const router = express.Router();
// express.Router() 라는 함수를 실행해서 router라는 변수에 할당을 받았다.

// localhost:3000/api/ GET
router.get('/', (req, res) => {
// 반환받은 router라는 변수를 이용해서 각각 router를 만들었고
// get Method 가 기본 경로에 들어왔을 때
    res.send('default url for goods.js GET Method');
    //반환(response)할 건데 'default url for goods.js GET Method' 문자열을 반환하는 API를 하나 만들거다
});
// 해당하는 코드를 실행할 것이다.

// localhost:3000/api/about GET
router.get('/about', (req, res) => {
// /about이라는 경로로 get Method 가 들어왔을 때
    res.send('goods.js about PATH');
    // 'goods.js about PATH' 이 문자열을 반환하는 API를 만들었다.
});
// 해당 코드를 실행할 것이다.
module.exports = router;
// 라우터라는 변수가 module.exports를 통해서 밖으로 내보내준다.