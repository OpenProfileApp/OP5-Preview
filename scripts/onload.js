function onLoadEmojis() {
    page_author_1_emojis();
    written_date_1_emojis();
    full_name_emojis();
    first_name_emojis();
    middle_name_emojis();
    last_name_emojis();
    nickname_emojis();
    alias_emojis();
    alter_ego_emojis();
    prefix_emojis();
    suffix_emojis();
    former_name_emojis();
    name_origin_emojis();
    personal_thoughts_name_emojis();
}

function onLoadElse() {
    showTextPopup();
}

function onLoadAll() {
    onLoadEmojis();
    onLoadElse();
}

window.onload = onLoadAll;