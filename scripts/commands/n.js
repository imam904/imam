/**
 * @author EMON HAWLADAR 
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: ".",
  version: "1.2.6",
  permssion: 0,
  credits: "EMon-BHai",
  prefix: false,
  description: "Bot Prefix",
  category: "NO PREFIX",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
          hours = Math.floor(time / (60 * 60)),
          minutes = Math.floor((time % (60 * 60)) / 60),
          seconds = Math.floor(time % 60);
    const data = ["=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞 (✷‿✷) ",
      " === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===\n  --❖-- 𝐈𝐭'𝐬 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n--ღღ🦋🖤✨-\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n-ভালোবাসা সুন্দর ___,🖤🦋\n\n- যদি প্রিয় মানুষটি সঠিক হয়....!☺️🖤🙂✨🌼\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) ",
      "___=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n❥◎⃝! শূন্যতায় ভাসি🙃 \n\n❥কখনো হাসি -😁💚_আবার কাঁদি!-😅\n\n❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি😊❤\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞 (✷‿✷)",
      "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--𝐈𝐭'𝐬 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n ❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n\n___💚__পৃথিবীটা আজ...\n\nমিথ্যে মায়াতে ভরা...!💚🌺\n\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\n\nঅভিনয়ের সেরা...👎🥀\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷)",
      "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💜🔐🌈 ___\n\n- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_সবাই তো খুশি চায়_আর আমি প্রতিটা খুশিতে তোমাকে চাই⚜️— -!!-) 😊🖤\n\n___💜🔐🌈\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷)",
      "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤🐰\n\n💖🦋\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷)",
      "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷)",
      "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:(-𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋 -(^আমি আমার প্রিয় মানুষটার প্রতি আসক্ত >!💖🔐🍭)😇\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷)",

      "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🌼💜\n\n___🍒🖇️✨___\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷)",
      "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n°🐹💙🍒\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙀𝙈𝙤𝙣-𝘽𝙝𝙖𝙞(✷‿✷)"
    ];
    var link = [
      "https://i.imgur.com/V8iwIdC.mp4",
      "https://i.imgur.com/Ym9AHLQ.mp4"
    ];

    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `====「 ${namebot} 」====\n\n ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/EMon-BHai.mp4"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/EMon-BHai.mp4"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/EMon-BHai.mp4")).on("close", () => callback()); 
  }
};
