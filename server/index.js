const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 9000;

app.use(cors());


app.get('/', (req, res) => {
    res.send('Jeep is running');
})

app.listen(port, () => {
    console.log(`Jeep is running on ${port}`);
})
