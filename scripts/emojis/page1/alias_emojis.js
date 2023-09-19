function getRandomEmojialias_emojis() {
  var emojis = ['😀', '😁', '😄', '😉', '😊', '😋', '😎', '😍', '🥰', '🙂', '🤩', '🤔', '🤨', '😐', '😶'
  , '😶', '😏', '😮', '😯', '😌', '🙃', '🫠', '😲', '🤯', '😬', '😮', '🥶', '😳', '😇', '🥳', '🥸'
  , '🥺', '🤠', '🤡', '🤫', '🤭', '🫣', '🧐', '🤓', '😈']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function alias_emojis() {
    var inputElement = document.getElementById('alias');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmojialias_emojis();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }