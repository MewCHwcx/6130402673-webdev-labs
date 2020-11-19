var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './public');
app.use(express.static('public'));

app.get('/dynamic_view', function(req, res) {
    res.render('dynamic', {
        name: "Chayanis Wongboonmee",
        url: "https://github.com/MewCHwcx",
        company: "seagate",
        companyURL: "https://www.seagate.com/as/en/",
        company1: "line",
        companyURL1: "https://linecorp.com/th/",
        company2: "agoda",
        companyURL2: "https://www.agoda.com/th-th/?site_id=1826369&tag=0f34a470-263f-196f-ce01-7d125c5dd648&device=c&network=g&adid=402458152041&rand=6867269209352347815&expid=&adpos=&gclid=Cj0KCQiA7qP9BRCLARIsABDaZzgcVUVhDSUfyhJbjSMkm54N6jgGIRbNX0rW5Ur57Dm4sDWFr36Kl3gaAnTWEALw_wcB",
    });
})

app.listen(3000);