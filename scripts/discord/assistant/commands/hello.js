module.exports = {
    data: {
      name: 'hello',
      description: 'Say hello to the bot',
    },
    type: 'slash', // Specify the type of command (slash or text)
    async execute(interaction) {
      // Specify the channel ID where you want to send the message
      const channelId = '907182663775948841';
  
      // Retrieve the channel by ID
      const channel = interaction.client.channels.cache.get(channelId);
  
      if (channel) {
        // Send a message to the specified channel
        await channel.send('Hello from the bot!');
        await interaction.reply('Hello! Message sent to the specified channel.');
      } else {
        await interaction.reply('Error: Could not find the specified channel.');
      }
    },
  };  