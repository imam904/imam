module.exports.config = {
    name: "caption",
    version: "1.0.1",
    permssion: 0,
    credits: "EMon-BHai",
    prefix: 'awto',
    description: "bangla caption",
    category: "user",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`http://fi3.bot-hosting.net:20536/poem/love`);
     
        var poem = res.data.data;

    

        return api.sendMessage({
            body: poem

        }, event.threadID, event.messageID);
}
