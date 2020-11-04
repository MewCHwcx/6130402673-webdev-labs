var express = require('express');
var router = express.Router();

const request = require('request')

router.get('/ip', function(req, res){
    request.get('http://httpbin.org/ip' , (error, response , body) => {
        if (error) {
            return console.dir(error);
        }
        var result = JSON.parse(body);
        var ip = result.origin;
        res.send({ip})
    })
});

module.exports = router