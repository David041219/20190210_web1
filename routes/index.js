var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/main');
});

router.get('/arrow', function (req, res, next) {
    console.log(' 화살표돌리기로 접속됨 ');
    res.render('index', { title: 'SPINNING ARROW' });
});

router.get('/gaji', function (req, res, next) {
    console.log(' 가지돌리기로 접속됨 ');
    res.render('gaji', { title: 'SPINNING GAJI' });
});

router.get('/doge', function (req, res, next) {
    console.log('DOGE BLACK JACK접속 ');
    res.render('doge_big', { title: 'DOGE BLACKJACK' });
});

router.get('/main', function (req, res, next) {
    console.log('메인화면 접속1111');
    res.render('newmain', { title: 'MAIN SCREEN' });
})

router.get('/weather', function (req, res, next) {
    console.log('날씨이동페이지 접속 backend');

    res.render('weather', { title: 'weater' });
})

router.post('/weather', function (req, res, next) {
    console.log('값 :', req.body.cityname);

    var cityID;
    if (req.body.cityname == "서울") {
        cityID = "1835847"
    }
    else if (req.body.cityname == "부산") {
        cityID = "1838524"
    }
    else if (req.body.cityname == "달라스") {
        cityID = "4684888"
    }
    var address = 'http://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&APPID=9b3a3922e219d560ee44c12201fa33a3';
    request(address, function (error, response, body) {
        body = JSON.parse(body);
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.

        return res.json({
            "success": true,
            "weather": body.weather[0].main,
            "temperature": body.main.temp *1.0 - 273.15
        });
    });

})


module.exports = router;
