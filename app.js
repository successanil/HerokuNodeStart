var express = require('express')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, "public")));


// app.use('/userProfileMod/api/college', collegeProfileRoute);
// app.use('/userProfileMod/api/candidate', candidateRoute);


app.use((req, res, next) => {
    const error = new Error("400 Bad Request");
    error.status = error.status || 404;
    next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
    //console.log(error)
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error"
        },
    });
});

module.exports = app