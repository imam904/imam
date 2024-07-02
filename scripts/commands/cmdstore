const axios = require("axios");
const availableCmdsUrl = "https://raw.githubusercontent.com/sharifvau/Emon-Server/main/availableCmds.json";
const cmdUrlsJson = "https://raw.githubusercontent.com/sharifvau/Emon-Server/main/cmdUrls.json";
const pictureUrl = "https://raw.githubusercontent.com/sharifvau/Emon-Server/main/Emon.jpg";

const itemsPerPage = 10;

module.exports.config = {
  name: "cmdstore",
  credits: "Emon",
  permission: 0,
  version: "2.0",
  description: "Commands Store of EMon-BHai-Bot",
  cooldowns: 3,
  prefix: 'awto',
  category: "Tools",
  usages: "cmdstore"
};

module.exports.run = async function ({ api, event, args }) {
  const page = parseInt(args[0]) || 1;
  try {
    const response = await axios.get(availableCmdsUrl);
    const cmds = response.data.cmdName;
    const totalPages = Math.ceil(cmds.length / itemsPerPage);

    if (page < 1 || page > totalPages) {
      return api.sendMessage(
        `❌ | Invalid page number. Please enter a number between 1 and ${totalPages}.`,
        event.threadID,
        event.messageID
      );
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cmdsToShow = cmds.slice(startIndex, endIndex);

    let msg = `╭─────⭓${page}⭓──────⭓\n`;

    cmdsToShow.forEach((cmd, index) => {
      msg += `│ 『 ${startIndex + index + 1}. ${cmd.cmd} \n│ Credits: ${cmd.emon} \n│ AddCmd: ${cmd.emon2 || "N/A"}』\n│────────────⭓\n`;
    });

    msg += `╰─────⭓${page}⭓──────⭓`;

    if (page < totalPages) {
      msg += `\n🌸───※ ·❆· ※───🌸\nআরও কমান্ডের জন্য \n"${this.config.name} ${page + 1}" রিপ্লাই করুন.\n🌸───※ ·❆· ※───🌸`;
    }

    const attachment = await axios({
      url: pictureUrl,
      method: "GET",
      responseType: "stream"
    }).then(response => response.data);

    api.sendMessage({
      body: msg,
      attachment: attachment
    }, event.threadID, (error, info) => {
      if (error) return api.sendMessage("❌ | Failed to send the message.", event.threadID, event.messageID);

      global.client.handleReply.push({
        name: this.config.name,
        type: "select",
        messageID: info.messageID,
        author: event.senderID,
        cmds: cmds,
        page: page
      });
    }, event.messageID);
  } catch (error) {
    api.sendMessage(
      "❌ |  কমান্ড পুনরুদ্ধার করতে ব্যর্থ হয়েছে. অনুগ্রহ করে URL বা আপনার নেটওয়ার্ক সংযোগ পরীক্ষা করুন৷.",
      event.threadID,
      event.messageID
    );
  }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (handleReply.author != event.senderID) {
    return api.sendMessage("❌ আপনার এই কমান্ড ব্যবহার করার অনুমতি নেই ❌", event.threadID, event.messageID);
  }

  const reply = parseInt(event.body);
  const startIndex = (handleReply.page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (isNaN(reply) || reply < startIndex + 1 || reply > endIndex) {
    return api.sendMessage(
      `❌ | অনুগ্রহ করে  ${startIndex + 1} এবং ${Math.min(endIndex, handleReply.cmds.length)}এর মধ্যে একটি নম্বর দিয়ে উত্তর দিন.`,
      event.threadID,
      event.messageID
    );
  }

  try {
    const cmdName = handleReply.cmds[reply - 1].cmd;
    const response = await axios.get(cmdUrlsJson);
    const selectedCmdUrl = response.data[cmdName];

    if (!selectedCmdUrl) {
      return api.sendMessage(
        "❌ | কমান্ড URL পাওয়া যায়নি.",
        event.threadID,
        event.messageID
      );
    }

    api.unsendMessage(handleReply.messageID);
    const msg = `╭───⭓EMON⭓───⭓\n│ EMon-BHai-Bot : Command \n│▰▰▰▰▰▰▰▰▰▰▰▰\n│ ╰┈➤ ❝ [ Command Url ]= ${selectedCmdUrl}\n╰──EMon-BHai-Bot──⭓`;

    const attachment = await axios({
      url: pictureUrl,
      method: "GET",
      responseType: "stream"
    }).then(response => response.data);

    api.sendMessage({
      body: msg,
      attachment: attachment
    }, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage(
      "❌ | কমান্ড পুনরুদ্ধার করতে ব্যর্থ হয়েছে. অনুগ্রহ করে URL বা আপনার নেটওয়ার্ক সংযোগ পরীক্ষা করুন৷.",
      event.threadID,
      event.messageID
    );
  }
};
