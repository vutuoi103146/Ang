const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();
app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});


app.get('/getData',(req, res) =>res.send('Hello'));
app.post('/sign',jsonParser, (req, res) =>{
    res.send(req.body.name);
});
app.listen(3000,()=> console.log('Server is running'));
