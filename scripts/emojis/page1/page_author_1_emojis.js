function getRandomEmojipage_author_1() {
    var emojis = ['📝', '✍️', '🖊️', '✏️', '📄']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function page_author_1_emojis() {
    var inputElement = document.getElementById('page_author_1');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmojipage_author_1();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }

  