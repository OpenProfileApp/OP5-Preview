function getRandomEmojisuffix() {
  var emojis = ['😀', '😁', '😄', '😉', '😊', '😋', '😎', '😍', '🥰', '🙂', '🤩', '🤔', '🤨', '😐', '😶'
  , '😶', '😏', '😮', '😯', '😌', '🙃', '🫠', '😲', '🤯', '😬', '😮', '🥶', '😳', '😇', '🥳', '🥸'
  , '🥺', '🤠', '🤡', '🫨', '🤫', '🤭', '🫣', '🧐', '🤓', '😈']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function suffix_emojis() {
    var inputElement = document.getElementById('suffix');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmojisuffix();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }