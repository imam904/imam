const axios = require('axios');

module.exports.config = {
    name: "sms",
    version: "1.0.0",
    permission: 2,
    credits: "Rahad", // Do not change my Credit 🙂🤝
    description: "Send an SMS to the specified number",
    prefix: true,
    category: "sms send",
    usages: "sms <phone_number> <message>",
    cooldowns: 5,
    dependencies: {
        "axios": "^0.21.1" 
    }
};

module.exports.run = async function({ api, event, args }) {
    const { threadID } = event;
    const phoneNumber = args[0];
    const message = args.slice(1).join(" ");

    if (!phoneNumber || !message) {
        api.sendMessage("Please provide both phone number and message in the format: sms <phone_number> <message>", threadID);
        return;
    }

    try {
        const response = await axios.get(`http://bulksmsbd.net/api/smsapi`, {
            params: {
                api_key: 'C4x8VSc1xDxYrlFLlO1j', 
                type: 'text',
                number: phoneNumber,
                senderid: '8809617617727',
                message: message
            }
        });

        const { success_message, error_message } = response.data;
        
        if (success_message) {
            api.sendMessage(success_message, threadID);
        } else {
            api.sendMessage(`Error: ${error_message}`, threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage(`An error occurred: ${error.message}`, threadID);
    }
};
