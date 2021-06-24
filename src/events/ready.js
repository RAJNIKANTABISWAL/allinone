const chalk = require('chalk');
const figlet = require('figlet');
const db = require('quick.db');

module.exports = async(client) => {
    console.log(chalk.yellow(figlet.textSync('NSystem', { horizontalLayout: 'full' })));
    console.log(chalk.red(`Bot started!
=====================================
> Users: ${client.users.cache.size}
> Channels: ${client.channels.cache.size}
> Servers: ${client.guilds.cache.size}
> Bot Ping: ${client.ws.ping} XD
> Prefix: ${client.config.bot.setting.main_prefix}
> Developer: @Khyren
#7558
> Support: https://discord.gg/pmF7hue4PA
=====================================`))

    client.user.setActivity(client.config.bot.setting.main_prefix + "help");
}
