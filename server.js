var express = require('express')

const mastRoute = require('./src/Routes/mastroute');

const mastController = require("./src/controller/mastcontroller")

const app = express()

const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.send('Haha');

});

app.use('/getWeatherDataList', mastController.getWeatherDataList);
// app.use('/m', mastRoute)
app.use('/fetchTempretureForCity', mastController.fetchTempretureForCity)



app.listen(PORT, () => console.log(`Listening on ${PORT}`))

