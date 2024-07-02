module.exports.config = {
       name: "text",
       version: "1.0.0",
       permission: 0,
       credits: "Nayan",
       description: "",
       prefix: 'awto', 
       category: "user", 
       usages: "Link",
       cooldowns: 5,
       dependencies: {
    "nayan-server": ''
  }
  },

module.exports.run = async function ({ api, event, args,})  {
  const linkanh = events.messageReply.attachments[0].url || args.join(" ");
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
const { img2text} = require('nayan-server')
    const data = await img2text(`${linkanh}`);
  console.log(data);
        var msg = [];
  const text = data.text
        {
            msg += `${text}`
        }
    return api.sendMassage({
        body: msg

    }, events.threadID, events.messageID);
  }
