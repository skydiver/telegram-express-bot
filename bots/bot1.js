// LOAD MAIN CONFIG
require('dotenv').config();

// LOAD BOT CONFIG FROM JSON
const dotenvJSON = require('dotenv-json')({ path: './bots/bot1.env.json'});

// SETUP BOT
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.telegram.setWebhook(`${process.env.APP_URL}${process.env.BOT_PATH}`)

// BOT ACTIONS
bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

// EXPORT BOT
module.exports = bot.webhookCallback(`${process.env.BOT_PATH}`);