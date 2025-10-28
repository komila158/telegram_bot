import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8483602290:AAEl3VIqFBH0XxcBQEQnLGCkSNhBJb7K5Ws";
const bot = new TelegramBot(TOKEN, { polling: true});

bot.on("message" , function (msg) {

    const chatId = msg.chat.id;
    const text = msg.text;
    const firstname = msg.chat.first_name;

    bot.sendMessage(chatId, `hush kelipsiz, ${firstname}`,{
     reply_markup: {
        keyboard: [
            [{text: "Boshlash🧠"}],
            [{text: "Menu 🫠"}, {text: "Sozlamalar🫆"}],
        ],
        resize_keyboard: true,
     }
    });


    console.log(msg);
    
})
console.log("Bot yaratildi....");
