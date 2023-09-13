window.addEventListener('beforeunload', function() {
    // Attempt to clear the cache
    if (window.location.reload) {
      window.location.reload(true); // Force a hard refresh, clearing the cache
    }
  });
  