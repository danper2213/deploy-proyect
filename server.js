
//Install express server
const express = require('express');
const path = require('path');
const http = require('http')
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/deploy-proyect'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname + '/dist/deploy-proyect/index.html' ));
});

const server = http.createServer(app);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);