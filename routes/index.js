var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/arrow');
});

router.get('/arrow', function(req, res, next) {
    console.log(' 화살표돌리기로 접속됨 ');
    res.render('index', { title: 'SPINNING ARROW' });
});

router.get('/gaji', function(req, res, next) {
    console.log(' 가지돌리기로 접속됨 ');
    res.render('gaji', {title: 'SPINNING GAJI'});
});

router.get('/doge', function(req, res, next) {
    console.log('DOGE BLACK JACK접속 ');
    res.render('doge_big', {title: 'DOGE BLACKJACK'});
});


module.exports = router;
