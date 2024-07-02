module.exports.config = {
  name: "hot",
  version: "1.0.0",
  permission: 2,
  credits: "Emon",
  prefix: 'awto',
  description: "Hot video",
  category: "18+",
  usages: "hot",
  cooldowns: 5
};  

module.exports.run = async ({
  api: a,
  event: b,
  args: c,
  client: d,
  Users: e,
  Threads: f,
  __GLOBAL: g,
  Currencies: h
}) => {
  const i = global.nodemodule.axios;
  const j = global.nodemodule.request;
  const k = global.nodemodule["fs-extra"];
  var l = ["--Hot Video By EMon-BHai 💦"];
  var m = l[Math.floor(Math.random() * l.length)];
  var n = ["https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W", "https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3", "https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr_", "https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0", "https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR", "https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x-", "https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg", "https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu", "https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i", "https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V", "https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91", "https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb", "https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9", "https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC", "https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp", "https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L", "https://drive.google.com/uc?id=1jr4YzPNCTOj_lfdOSnauXfTPJkbuqS3f"];
  var o = () => a.sendMessage({
    body: "「 " + m + " 」",
    attachment: k.createReadStream(__dirname + "/cache/15.mp4")
  }, b.threadID, () => k.unlinkSync(__dirname + "/cache/15.mp4"));
  return j(encodeURI(n[Math.floor(Math.random() * n.length)])).pipe(k.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => o());
};
