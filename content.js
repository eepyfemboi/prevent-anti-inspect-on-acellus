(function() {
  window.addEventListener('beforeunload', function(event) {
    event.returnValue = 'Are you sure you want to leave this page?';
  });
})();
