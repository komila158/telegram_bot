import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8483602290:AAEl3VIqFBH0XxcBQEQnLGCkSNhBJb7K5Ws";
const bot = new TelegramBot(TOKEN, { polling: true});

bot.on("message" , function (msg) {
    const chatId = msg.chat.id;
    const text = msg.text;

    bot.sendMessage(chatId, `Salom -> ${text}`);

    console.log(msg);
    
})
console.log("Bot yaratildi....");
