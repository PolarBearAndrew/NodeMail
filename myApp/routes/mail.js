var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'chenpoanandrew@gmail.com',
        pass: ''
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'AndrewChen✔ <chenpoanandrew@gmail.com>', // sender address 寄件人
    to: 'rilakkuma0330k@gmail.com', // list of receivers  寄給誰
    subject: '[多多獸]  ✔', // Subject line 信件標題
    text: 'Doro Abubu', // plaintext body  ??
    html: '<h1>!~ Abubu ~!</h1>' // html body  內容 可以用html
};


//送拉
//
router.get('/send', function(req, res, next){

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);

	});

	res.render('index', { title: 'Send Mail' });
});


module.exports = router;
