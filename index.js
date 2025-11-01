import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8483602290:AAEl3VIqFBH0XxcBQEQnLGCkSNhBJb7K5Ws";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const menuPhoto = "./assets/images/1.webp";

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 😜" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    bot.sendMessage(chatId, "Salom, sizga qanday yordam bera olaman?");
  } else if (text == "Menu 😜") {
    const kutingXabari = await bot.sendMessage(chatId, "Iltimos kuting...");

  bot.sendMessage(chatId, `Salom -> ${text}`);
    setTimeout(function () {
      bot.deleteMessage(chatId, kutingXabari.message_id);
      bot.sendPhoto(chatId, menuPhoto, {
        caption: "Bizning menyuyimiz...",
        reply_markup: {
          keyboard: [
            [{ text: "Manti" }, { text: "Karam" }],
            [{ text: "Shashlik" }, { text: "Hotdog" }],
          ],
        },
      });
    }, 1000);
  }

  console.log(msg);
  //   console.log("*********");
  //   console.log(chatId, text);
});

console.log("Bot ishga tushdi...");