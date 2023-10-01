document.addEventListener("DOMContentLoaded", function () {
    var printButton = document.getElementById('button_print');

    printButton.addEventListener('click', function () {
      // Trigger the browser's default print dialog
      window.print();
    });
  });