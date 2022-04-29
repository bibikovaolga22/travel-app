const path = require('path')
 
const mockAPIResponse = require('./mockAPI.js')
 


//express
const express = require('express');
const app = express();

//cors
const cors = require('cors');
app.use(cors());



var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express())
app.use(express.static('dist'));

console.log(JSON.stringify(mockAPIResponse))


app.get('/', function (req, res) {
    res.sendFile(path.resolve ("dist/index.html"))
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen( 8081, function () {
    console.log('Example app listening on port 8081!')
})


let projectData = {};

//GET
app.get('/getWeather', getWeather);
function getWeather(req, res) {
    res.send(projectData)
    console.log(projectData)
}


// POST
app.post('/postWeather', postWeather);
function postWeather(req, res) {
    projectData = req.body;
    console.log(projectData);

}

