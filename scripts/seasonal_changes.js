// Function to update elements based on the time of year
function updateElementsByTimeOfYear() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-based

    // Define the date ranges for each season (you can adjust these)
    const January = 1;
    const February = 2;
    const March = 3;
    const April = 4;
    const May = 5;
    const June = 6;
    const July = 7;
    const August = 8;
    const September = 9;
    const October = 10;
    const November = 11;
    const December = 12;

    // Generate a random number between 1 and 6
    randomNumber = Math.floor(Math.random() * 6) + 1;

    // Determine the current season
    if (currentMonth == October) {
        // Get all elements with the specified classes
        const body = document.querySelector('body');
        const loader_outer = document.querySelector('.loader_outer');
        const loader_inner = document.querySelector('.loader_inner');
        const loader_inner_color = document.querySelector('.loader_inner_color');
        const loading_image = document.querySelector('#loading_image')
        const loading_message = document.querySelectorAll('.loading_message');
        const social_button = document.querySelectorAll('.social_button')
        const page_outer = document.querySelectorAll('.page_outer');
        const page_inner = document.querySelectorAll('.page_inner');
        const top = document.querySelector('.top');
        const left = document.querySelector('.left');
        const left_bar = document.querySelector('.left_bar');
        const left_top = document.querySelector('.left_top');
        const left_top_2 = document.querySelector('.left_top_2');
        const right = document.querySelector('.right');
        const label_tab = document.querySelectorAll('.label_tab');
        const verified_source_tab = document.querySelectorAll('.verified_source_tab');
        const verified_source_favicon = document.querySelectorAll('.verified_source_favicon');
        const help_box = document.querySelectorAll('.help_box');
        const history_tab = document.querySelectorAll('.history_tab');
        const input_text = document.querySelectorAll('.input_text');
        const input_text_legal = document.querySelectorAll('.input_text_legal');
        const input_search = document.querySelectorAll('.input_search');
        const textarea = document.querySelectorAll('textarea');
        const page_indicator = document.querySelectorAll('.page_indicator');
        const image_input = document.querySelectorAll('.image_input');
        const image_input_2 = document.querySelectorAll('.image_input_2');
        const input_text_author = document.querySelectorAll('.input_text_author');
        const input_text_written = document.querySelectorAll('.input_text_written');
        const group = document.querySelectorAll('.group');

        // Enable seasonal features
        const messageElement = document.querySelector(`#loading_message_spooky_${randomNumber}`);
        if (messageElement) {
            messageElement.style.display = "block";
        }
        body.style.backgroundColor = "#171228";
        loader_outer.style.backgroundColor = "#171228";
        loader_inner.style.border = "8px solid #ffffff";
        loader_inner_color.style.backgroundColor = "#ffffff";
        loading_image.src = "media/images/openprofile/spooky/op_spooky_favicon.png";
        loading_message.forEach((loadingMessage) => {
            loadingMessage.style.color = "#ffffff";
        });
        social_button.forEach((social_button) => {
            social_button.style.backgroundColor = "#302b44";
            social_button.addEventListener('mouseover', () => {
                social_button.style.backgroundColor = '#514B67';
            });
            social_button.addEventListener('mouseout', () => {
                social_button.style.backgroundColor = '#302b44';
            });
        });

        page_outer.forEach((page_outer) => {
            page_outer.style.backgroundColor = "#242036";
        });
        page_inner.forEach((page_inner) => {
            page_inner.style.backgroundColor = "#302b44";
        });
        top.style.backgroundColor = "#242036";
        top.style.boxShadow = "0px 0px 8px #0f0c1a";
        left.style.backgroundColor = "#242036";
        left.style.boxShadow = "0px 0px 8px #0f0c1a";
        left_bar.style.backgroundColor = "#302b44";
        left_bar.style.boxShadow = "0px 0px 8px #171228";
        left_top.style.backgroundColor = "#302b44";
        left_top.style.boxShadow = "0px 0px 8px #171228";
        left_top_2.style.backgroundColor = "#302b44";
        left_top_2.style.boxShadow = "0px 0px 8px #171228";
        right.style.backgroundColor = "#242036";
        right.style.boxShadow = "0px 0px 8px #0f0c1a";
        label_tab.forEach((label_tab) => {
            label_tab.style.backgroundColor = "#242036";
        });
        verified_source_tab.forEach((verified_source_tab) => {
            verified_source_tab.style.backgroundColor = "#242036";
            verified_source_tab.style.boxShadow = "0px 0px 8px #242036";
        });
        verified_source_favicon.forEach((verified_source_favicon) => {
            verified_source_favicon.addEventListener('mouseover', () => {
                verified_source_favicon.style.boxShadow = "0px 0px 8px #171228";
                verified_source_favicon.style.scale = "1.15";
            });
            verified_source_favicon.addEventListener('mouseout', () => {
                verified_source_favicon.style.boxShadow = "";
                verified_source_favicon.style.scale = "1";
            });
        });
        help_box.forEach((help_box) => {
            help_box.style.backgroundColor = "#242036";
            help_box.style.boxShadow = "0px 0px 8px #171228";
        });
        history_tab.forEach((history_tab) => {
            history_tab.style.backgroundColor = "#242036";
        });
        input_text.forEach((input_text) => {
            input_text.style.backgroundColor = "#514B67";
        });
        input_text_legal.forEach((input_text_legal) => {
            input_text_legal.style.backgroundColor = "#242036";
        });
        input_search.forEach((input_search) => {
            input_search.style.backgroundColor = "#242036";
            input_search.addEventListener('mouseover', () => {
                input_search.style.backgroundColor = "#514B67";
                input_search.style.boxShadow = "0px 0px 8px #242036";
            });
            input_search.addEventListener('mouseout', () => {
                if (!input_search.matches(':focus')) {
                    input_search.style.backgroundColor = "#242036";
                    input_search.style.boxShadow = "";
                }
            });
            input_search.addEventListener('focus', () => {
                input_search.style.backgroundColor = '#514B67';
                input_search.style.boxShadow = '0px 0px 8px #242036';
            });
            input_search.addEventListener('blur', () => {
                input_search.style.backgroundColor = '#242036';
                input_search.style.boxShadow = '';
            });
        });
        textarea.forEach((textarea) => {
            textarea.style.backgroundColor = "#514B67";
        });
        page_indicator.forEach((page_indicator) => {
            page_indicator.style.backgroundColor = "#242036";
        });
        image_input.forEach((image_input) => {
            image_input.style.backgroundColor = "#514B67";
            image_input.addEventListener('mouseover', () => {
                image_input.style.backgroundColor = '#726c87';
            });
            image_input.addEventListener('mouseout', () => {
                image_input.style.backgroundColor = '#514B67';
            });
        });
        image_input_2.forEach((image_input_2) => {
            image_input_2.style.backgroundColor = "#302b44";
            image_input_2.addEventListener('mouseover', () => {
                image_input_2.style.backgroundColor = '#514B67';
            });
            image_input_2.addEventListener('mouseout', () => {
                image_input_2.style.backgroundColor = '#302b44';
            });
        });
        input_text_author.forEach((input_text_author) => {
            input_text_author.style.backgroundColor = "#514B67";
            input_text_author.addEventListener('mouseover', () => {
                input_text_author.style.backgroundColor = "#726c87";
                input_text_author.style.boxShadow = "0px 0px 8px #242036";
            });
            input_text_author.addEventListener('mouseout', () => {
                if (!input_text_author.matches(':focus')) {
                    input_text_author.style.backgroundColor = "#514B67";
                    input_text_author.style.boxShadow = "";
                }
            });
            input_text_author.addEventListener('focus', () => {
                input_text_author.style.backgroundColor = '#726c87';
                input_text_author.style.boxShadow = '0px 0px 8px #242036';
            });
            input_text_author.addEventListener('blur', () => {
                input_text_author.style.backgroundColor = '#514B67';
                input_text_author.style.boxShadow = '';
            });
        });

        input_text_written.forEach((input_text_written) => {
            input_text_written.style.backgroundColor = "#514B67";
            input_text_written.addEventListener('mouseover', () => {
                input_text_written.style.backgroundColor = "#726c87";
                input_text_written.style.boxShadow = "0px 0px 8px #242036";
            });
            input_text_written.addEventListener('mouseout', () => {
                if (!input_text_written.matches(':focus')) {
                    input_text_written.style.backgroundColor = "#514B67";
                    input_text_written.style.boxShadow = "";
                }
            });
            input_text_written.addEventListener('focus', () => {
                input_text_written.style.backgroundColor = '#726c87';
                input_text_written.style.boxShadow = '0px 0px 8px #242036';
            });
            input_text_written.addEventListener('blur', () => {
                input_text_written.style.backgroundColor = '#514B67';
                input_text_written.style.boxShadow = '';
            });
        });

        group.forEach((group) => {
            group.addEventListener('mouseover', () => {
                input_text.style.backgroundColor = "#726c87";
                input_text.style.boxShadow = '0px 0px 8px #242036';
                label_tab.style.boxShadow = '0px 0px 8px #242036';
                history_tab.style.boxShadow = '0px 0px 8px #242036';
                input_text_legal.style.backgroundColor = "#726c87";
                input_text_legal.style.boxShadow = '0px 0px 8px #171228';
                textarea.style.backgroundColor = "#726c87";
                textarea.style.boxShadow = '0px 0px 8px #242036';
            });
            group.addEventListener('mouseout', () => {
                if (!group.matches(':focus')) {
                    input_text.style.backgroundColor = "#514B67";
                    input_text.style.boxShadow = '';
                    label_tab.style.boxShadow = '';
                    history_tab.style.boxShadow = '';
                    input_text_legal.style.backgroundColor = "#242036";
                    input_text_legal.style.boxShadow = '';
                    textarea.style.backgroundColor = "#514B67";
                    textarea.style.boxShadow = '';
                }
            });
            group.addEventListener('focus', () => {
                input_text.style.backgroundColor = "#726c87";
                input_text.style.boxShadow = '0px 0px 8px #242036';
                label_tab.style.boxShadow = '0px 0px 8px #242036';
                history_tab.style.boxShadow = '0px 0px 8px #242036';
                input_text_legal.style.backgroundColor = "#726c87";
                input_text_legal.style.boxShadow = '0px 0px 8px #171228';
                textarea.style.backgroundColor = "#726c87";
                textarea.style.boxShadow = '0px 0px 8px #242036';
            });
            group.addEventListener('blur', () => {
                input_text.style.backgroundColor = "#514B67";
                input_text.style.boxShadow = '';
                label_tab.style.boxShadow = '';
                history_tab.style.boxShadow = '';
                input_text_legal.style.backgroundColor = "#242036";
                input_text_legal.style.boxShadow = '';
                textarea.style.backgroundColor = "#514B67";
                textarea.style.boxShadow = '';
            });
        });
    }
}