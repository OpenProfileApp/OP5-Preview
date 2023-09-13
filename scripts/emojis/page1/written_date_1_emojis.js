function getRandomEmojiwritten_date_1() {
  var emojis = ['📅', '📆', '🗓️']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function written_date_1_emojis() {
    var inputElement = document.getElementById('written_date_1');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmojiwritten_date_1();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }