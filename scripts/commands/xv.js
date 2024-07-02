module.exports.config = {
	name: "xv",
	version: "0.0.3",
	permssion: 2,
	credits: "EMon-BHai",//mod lai by tpk
  prefix: 'awto',
	description: "...",
	category: "18+ Video",
	usages: "xv",
    cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) { 
    const { threadID, messageID, senderID } = event;
    try {
        if (!args[0]) return api.sendMessage('Enter the name', threadID, messageID);
        let axios = require('axios'),
            // pattern = new RegExp('^https://www.xnxx.com/video-'),
            name = encodeURIComponent(args.join(' '));
        const res = await axios.get('https://res.thenamk3.love/xnxx?s=' + name);
        if (res.data.result.length === 0) return api.sendMessage('❌ Not found!!!', threadID, messageID);
        let data = res.data.result,
            i = 0,
            str = '',
            temp;
        for (const el of data) {
            temp = el.info.replace(/\n/g, ' ').replace(/\s\s-\s\s/g, ' ').trimStart().split(' ');
            str += `${++i}. ${el.title}\n`;
            str += `👀 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${temp[0].replace('M', ' triệu ').replace('k', ' nghìn ')}\n`;
            str += `👍 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗵𝗶́𝗰𝗵: ${temp[1]}\n`;
            str += `⏳ 𝗧𝗵𝗼̛̀𝗶 𝗹𝘂̛𝗼̛̣𝗻𝗴: ${temp[2].replace('sec', ' giây ').replace('min', ' phút ').replace('hour', ' giờ ')}\n`;
            str += `🌟 𝗖𝗵𝗮̂́𝘁 𝗹𝘂̛𝗼̛̣𝗻𝗴: ${temp[3]}\n`;
            str += `🔗 𝗟𝗶𝗻𝗸: ${el.link}\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        };
        str += '➡️ Reply number, this is the status of the video you want to watch';
        api.sendMessage(str, threadID, (e, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: senderID,
                data
            });
        }, messageID);
    } catch (e) {
        api.sendMessage(e.message, event.threadID, event.messageID);
    }
};

module.exports.handleReply = async function ({ api, event, handleReply }) { 
    try {
        const { threadID, messageID, senderID, body } = event;
        const { author, data } = handleReply;
        if (author !== senderID) return;
        if (isNaN(body)) return api.sendMessage('Nhập số thứ tự để xem video', threadID, messageID);
        const stt = Number(body);
        if (!Number.isInteger(stt) || stt <= 0 || stt > data.length) return api.sendMessage('Nhập số thứ tự để xem video', threadID, messageID);
        api.unsendMessage(handleReply.messageID);
        let url = data[stt -1].link,
            axios = require('axios');
        const res = await axios.get('https://res.thenamk3.love/xnxxdowload?s=' + url);
        if (res.data.error) return api.sendMessage('Đã xảy ra lỗi:' + res.data.error, threadID, messageID);
        const stream = (await axios.get(res.data.files.high, {
            responseType: "stream"
        })).data;
        const msg = {
            body: `🔞 ==『 𝗫𝐕 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 』== 🔞

💬 𝗧𝗶𝘁𝗹𝗲: ${res.data.title }
⏳ 𝗞𝗵𝗼𝗮̉𝗻𝗴 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${res.data.duration}

🖼️ 𝗟𝗶𝗻𝗸 𝗜𝗺𝗮𝗴𝗲: ${res.data.image}
🔗 𝗟𝗶𝗻𝗸: ${res.data.URL}`,
            attachment: stream
        };
        api.sendMessage(msg, threadID, messageID);
    } catch (e) {
        api.sendMessage(e.message, event.threadID, event.messageID);
    }
};
