const Express = require('express');
const app = new Express();
const bodyParser = require('body-parser');
const test = require('./routes/api/test');
const credentials = require('./routes/api/credentials');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/api/test',test);
app.use('/api/credentials',credentials);

const port = 5000;

app.listen(port,function(){
    console.log("Started at port number 5000");
});