import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8483602290:AAEl3VIqFBH0XxcBQEQnLGCkSNhBJb7K5Ws";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const menuPhoto = "./rasm.avif";

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
    // bot.sendMessage(chatId, "Salom, sizga qanday yordam bera olaman?");

    bot.sendPhoto(chatId, "./m5.jpg", {
      caption: `
      The BMW M5 is a high-performance luxury sedan that blends a business sedan's comfort with a sports car's power, currently featuring a plug-in hybrid system with a twin-turbo V8 engine and electric motor.
      `,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Info", callback_data: "info" },
            { text: "price", callback_data: "price" },
          ],
          [{ text: "photos", callback_data: "photos" },],
        ],

      },
    })
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

  bot.on("callback_query", function (query) {
  console.log(query);
  const data = query.data;
  const chatId = query.message.chat.id;

  if (data == "info") {
    bot.sendMessage(chatId, "Bu yerda Lamborghini haqida ma'lumot olasiz");
  } else if (data == "photos") {
    bot.sendPhoto(chatId, "./m5.jpg");
  } else if (data == "price") {
    bot.sendMessage(chatId, "175,000 dollar", {
      reply_markup: {
        inline_keyboard: [[{ text: "Sotib olish", callback_data: "buy" }]],
      },
    });
  } else if (data == "buy") {
    bot.sendMessage(chatId, "Pullarni Soliyajonga bering... Mashina unda");
  }
});
  console.log(msg);
  //   console.log("*********");
  //   console.log(chatId, text);
});

console.log("Bot ishga tushdi...");