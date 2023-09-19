function getRandomEmojialter_ego() {
  var emojis = ['😀', '😁', '😄', '😉', '😊', '😋', '😎', '😍', '🥰', '🙂', '🤩', '🤔', '🤨', '😐', '😶'
  , '😶', '😏', '😮', '😯', '😌', '🙃', '🫠', '😲', '🤯', '😬', '😮', '🥶', '😳', '😇', '🥳', '🥸'
  , '🥺', '🤠', '🤡', '🤫', '🤭', '🫣', '🧐', '🤓', '😈']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function alter_ego_emojis() {
    var inputElement = document.getElementById('alter_ego');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmojialter_ego();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }