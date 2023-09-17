// ————————————————————[ LOAD-EMOJIS ]————————————————————— //
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

    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry = document.createElement("div");
    logEntry.textContent = "[Emojis] Loaded: 100%";
    logEntry.style.color = "#0ba206"
    consoleLog.appendChild(logEntry);
}

function onLoadElse() {
    showTextPopup();
}

function onLoadAll() {
    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry4 = document.createElement("div");
    logEntry4.textContent = "[OP5] OpenProfile is loading...";
    logEntry4.style.color = "#ffffff"
    consoleLog.appendChild(logEntry4);
    
    onLoadEmojis();
    onLoadElse();

    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry = document.createElement("div");
    logEntry.textContent = "[Page] Loaded: 100%";
    logEntry.style.color = "#0ba206"
    consoleLog.appendChild(logEntry);

    const logEntry2 = document.createElement("div");
    logEntry2.textContent = "[Page] This is a test error - nothing happened!";
    logEntry2.style.color = "#c60719"
    consoleLog.appendChild(logEntry2);

    const logEntry3 = document.createElement("div");
    logEntry3.textContent = "[Page] This is a test warning - nothing happened!";
    logEntry3.style.color = "#c29d00"
    consoleLog.appendChild(logEntry3);
}

window.onload = onLoadAll;