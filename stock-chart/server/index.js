const express = require('express');
const rp = require('request-promise');

const app = express();



const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log("user connected")
    // console.log(socket.id)
    rp('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo')
    .then(function (data) {
        console.log(data)
        io.emit('DATA', data)
    })
    .catch(function (err) {
        console.log(err)
    });

    // socket.on('SEND_MESSAGE', function(data) {
    //     io.emit('MESSAGE', data)
    // });
});