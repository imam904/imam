const fs = require("fs");
module.exports.config = {
    name: "emojimix",
    version: "1.0.1",
    permssion: 0,
    credits: "Emon",
    prefix: 'awto',
    description: "emoji mix Icon",
    category: "user",
    cooldowns: 5,
    denpendencies: {
        "fs": "",
        "request": "",
        "emoji-unicode": ""
    }
};

const emojiUnicode = require("emoji-unicode");
const { createReadStream, unlinkSync, writeFileSync } = require('fs');

module.exports.run = async function ({ api,event,args }) {
    var axios = require('axios');
        try {
            if (args.length != 2 || !args[0] || !args[1]) return api.sendMessage("🌸───※ ·❆· ※───🌸\n\n অনুগ্রহ করে ক্লিক করুন: emojimix 😢 🤣 \n\n🌸───※ ·❆· ※───🌸\n🔰𝙀𝙈𝙤𝙣-𝘽𝙃𝙖𝙞🔰",event.threadID,event.messageID);
                var emoji1 = "u"+emojiUnicode(args[0]),emoji2 = "u"+emojiUnicode(args[1]);
                    var { data } = await axios.get(`https://www.gstatic.com/android/keyboard/emojikitchen/20201001/${emoji1}/${emoji1}_${emoji2}.png`,{  method: 'GET',  responseType: 'arraybuffer' });
                writeFileSync(__dirname + "/cache/emojimix.png", Buffer.from(data, 'utf-8'));
            return api.sendMessage({ body:"🌸───※ ·❆· ※───🌸\n\n আপনার ইমোজি মিশ্রিত হয়েছে\n\n🌸───※ ·❆· ※───🌸\n🔰𝙀𝙈𝙤𝙣-𝘽𝙃𝙖𝙞🔰",attachment: createReadStream(__dirname + "/cache/emojimix.png")},event.threadID,event.messgaeID);
        }
    catch {
        return api.sendMessage("🌸───※ ·❆· ※───🌸\n\n ত্রুটি!, অন্য আইকন দিয়ে চেষ্টা করুন!\n\n🌸───※ ·❆· ※───🌸\n🔰𝙀𝙈𝙤𝙣-𝘽𝙃𝙖𝙞🔰",event.threadID,event.messgaeID);
    }
                  }
