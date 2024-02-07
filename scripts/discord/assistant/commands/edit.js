module.exports = {
    data: {
        name: 'edittext',
        description: 'Edit the text on the HTML page',
        options: [
            {
                name: 'newtext',
                description: 'The new text to set',
                type: 'STRING',
                required: true,
            },
        ],
    },
    type: 'slash',
    async execute(interaction) {
        // Retrieve the new text from the interaction options
        const newText = interaction.options.getString('newtext');

        // Broadcast the new text to connected HTML pages via WebSocket
        global.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                // Send the new text as a string to the connected HTML page(s)
                client.send(newText.toString());
            }
        });
        

        // Respond with a confirmation message
        await interaction.reply({ content: `New text set to: "${newText}"`, ephemeral: true });
    },
};
