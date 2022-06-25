
const express = require("express")
var app = express();
const Router = express.Router()
const bookscontroller = require("../controller/bookscontroller")


Router.get('/booksVolumeListForBusiness', bookscontroller.getBooksVolumeListForBusiness);


module.exports = Router