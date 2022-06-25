const axios = require('axios');

const appConstants = require('../config/AppConstants')


exports.getBooksVolumeListForBusiness = (req, res) => {

    axios.get('https://www.googleapis.com/books/v1/volumes?q=business')
        .then(function (response) {
            // handle success
            res.status(200).send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            res.status(404).send(error.message)
        })
        .then(function () {
            // always executed
        });


}

