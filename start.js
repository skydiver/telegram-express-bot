require('dotenv').config();

const express = require('express');
const expressApp = express();

// LOAD SAMPLE BOT
// const bot = require('./bots/bot1');
// expressApp.use(bot);

expressApp.get('/', (req, res) => {
    res.send('Hello World!');
});

// RUN WEB SERVER
const PORT = process.env.PORT || 7777;
expressApp.listen(PORT, () => {
    console.log(`Bot app running on port ${PORT}!`)
});