var express = require('express');
var router = express.Router();
var moment = require('moment');
const messages = [
  {
    text: "What's up Michigan Gamers",
    user: 'Amanda',
    added: moment(new Date()).format('MMM Do 2018, 7:22:36 a'),
  },
  {
    text: 'Joe Mama',
    user: 'Charles',
    added: moment(new Date()).format('MMM Do 2019, 10:22:44 a'),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Leave Yo Message', messages });
});

//Post Form//
router.post('/', (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
  };
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
