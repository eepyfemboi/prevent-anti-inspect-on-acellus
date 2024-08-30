(function() {
  document.querySelectorAll('video').forEach(video => {
    if (video.hasAttribute('disablePictureInPicture')) {
        video.removeAttribute('disablePictureInPicture');
    }
  });

  window.addEventListener('beforeunload', function(event) {
    event.returnValue = 'Are you sure you want to leave this page?';
  });
})();
