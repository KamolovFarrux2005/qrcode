const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const qr = require('qrcode');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/' , (req , res) => {

   res.render('index')

});

app.post('/qrcode' , (req , res) => {
    const url = req.body.url;
    if(url.length == 0) res.send('empty data!');
    qr.toDataURL(url, (err, data)=>{
        if(err) res.send('error occured');
        res.render('qrcode', {data});
    })
})
app.listen(process.env.PORT || 5000, () =>  {
    console.log(`Server started on port`);
});