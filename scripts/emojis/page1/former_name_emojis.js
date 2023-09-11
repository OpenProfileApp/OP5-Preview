function getRandomEmoji() {
    var emojis = ['😀', '😄', '😊', '😎', '😍', '🤔', '🙄', '😴']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function former_name_emojis() {
    var inputElement = document.getElementById('former_name');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmoji();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }