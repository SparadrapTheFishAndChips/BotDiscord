const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX, WELCOMECHAN } = require("config.js");

const client = new Client();

client.TOKEN = TOKEN;
client.PREFIX = PREFIX;
client.WELCOMECHAN = WELCOMECHAN;

client.commands = new Collection();