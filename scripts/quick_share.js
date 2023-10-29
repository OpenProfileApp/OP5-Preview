document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'c' && !isAnyInputFocused()) {
        const groups = document.querySelectorAll('.group');
        let output = '';

        groups.forEach(group => {
            const group_id = group.id.replace('_group', '');
            const label_tab = group.querySelector(`#${group_id}_label_tab`);
            const input_text = group.querySelector(`#${group_id}`);

            if (label_tab && input_text) {
                const label_content = label_tab.textContent;
                const input_content = input_text.value;

                if (input_content.trim() !== '') {
                    output += `**${label_content}:** ${input_content}\n`;
                } else {
                    console.log(`Input field for "${label_content}" is blank.`);
                }
            }
        });

        // Copy the formatted text to the clipboard
        const textArea = document.createElement('textarea');
        textArea.value = output;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'a' && !isAnyInputFocused()) {
        const groups = document.querySelectorAll('.group');
        let output = '';

        groups.forEach(group => {
            const group_id = group.id.replace('_group', '');
            const label_tab = group.querySelector(`#${group_id}_label_tab`);
            const input_text = group.querySelector(`#${group_id}`);
            const last_modified_text = group.querySelector(`#${group_id}_time`);

            if (label_tab && input_text && last_modified_text) {
                const label_content = label_tab.textContent;
                const input_content = input_text.value;
                const time = last_modified_text.textContent;

                if (input_content.trim() !== '') {
                    output += `**${label_content}:** ${input_content}\n *${time}*\n\n`;
                } else {
                    console.log(`Input field for "${label_content}" is blank.`);
                }
            }
        });

        // Copy the formatted text to the clipboard
        const textArea = document.createElement('textarea');
        textArea.value = output;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
});

function isAnyInputFocused() {
    const inputs = document.querySelectorAll('.input_text, .input_text_popup_prompt');
    for (let i = 0; i < inputs.length; i++) {
        if (document.activeElement === inputs[i]) {
            return true;
        }
    }
    return false;
}