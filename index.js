const path = require('path');

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {PORT} = process.env

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`up on ${PORT}`))


app.get('*', (req, res) => {
    const htmlFilePath = path.resolve(__dirname, 'landingPage.html');
  
    res.sendFile(htmlFilePath);
  });