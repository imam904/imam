module.exports.config = {
  name: "give",
  version: "1.0.0",
  permission: 2,
  credits: "Emon",
  prefix: 'awto',
  description: "file send",
  category: "admin",
  usages: "give",
  cooldowns: 0
};  

module.exports.run = async ({ event, api, args }) => {
  const name = args.join(" ");

  if (!name) {
    return api.sendMessage("Please provide a valid script name.", event.threadID, event.messageID);
  }

  let git;
  if (name.includes(".js")) {
    git = `https://raw.githubusercontent.com/sharifvau/EMon-BHai-Bot/main/scripts/commands/${name}`;
  } else {
    git = `https://raw.githubusercontent.com/sharifvau/EMon-BHai-Bot/main/scripts/commands/${name}.js`;
  }

  api.sendMessage(git, event.threadID, event.messageID);
}
