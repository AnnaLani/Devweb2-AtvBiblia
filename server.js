const { numArray, nameArray } = require('./read')
const express = require('express');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getnumarray', (req, res) => {
	res.send(numArray)
});

app.get('/getnamearray', (req, res) => {
	res.send(nameArray);
});

app.listen(3000, () => {
	console.log('Listening on port 3000')
})