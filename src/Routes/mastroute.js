
const express = require("express")
var app = express();
const Router = express.Router()
// const mastController = require("../controller/mastcontroller")


Router.post('/mastWelcome', (req, res) => {
    res.send('hello');
});


module.exports = Router