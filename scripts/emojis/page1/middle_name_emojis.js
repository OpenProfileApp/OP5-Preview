function getRandomEmojimiddle_name() {
  var emojis = ['😀', '😁', '😄', '😉', '😊', '😋', '😎', '😍', '🥰', '🙂', '🤩', '🤔', '🤨', '😐', '😶'
    , '😶', '😏', '😮', '😯', '😌', '🙃', '🫠', '😲', '🤯', '😬', '😮', '🥶', '😳', '😇', '🥳', '🥸'
    , '🥺', '🤠', '🤡', '🫨', '🤫', '🤭', '🫣', '🧐', '🤓', '😈']; // Add more emojis if desired
  var randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function middle_name_emojis() {
  var inputElement = document.getElementById('middle_name');
  var currentPlaceholder = inputElement.getAttribute('placeholder');
  var emoji = getRandomEmojimiddle_name();
  inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
}