function reloadJavaScriptCache() {
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      if (script.src) {
          script.src = script.src + '?v=' + new Date().getTime(); // Append a timestamp to the URL to force a cache refresh
      }
  }
}

window.addEventListener('load', reloadJavaScriptCache);