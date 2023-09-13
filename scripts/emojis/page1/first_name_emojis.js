function getRandomEmojifirst_name() {
  var emojis = ['😀', '😁', '😄', '😉', '😊', '😋', '😎', '😍', '🥰', '🙂', '🤩', '🤔', '🤨', '😐', '😶'
  , '😶', '😏', '😮', '😯', '😌', '🙃', '🫠', '😲', '🤯', '😬', '😮', '🥶', '😳', '😇', '🥳', '🥸'
  , '🥺', '🤠', '🤡', '🫨', '🤫', '🤭', '🫣', '🧐', '🤓', '😈']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function first_name_emojis() {
    var inputElement = document.getElementById('first_name');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmojifirst_name();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }