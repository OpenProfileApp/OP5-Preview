module.exports = {
    data: {
      name: 'ping',
      description: 'Ping the bot to check its latency.',
    },
    async execute(interaction) {
      await interaction.reply(`Pong! Bot latency is ${Date.now() - interaction.createdTimestamp}ms.`);
    },
    type: 'slash', // Specify the type of command (slash or text)
  };
  