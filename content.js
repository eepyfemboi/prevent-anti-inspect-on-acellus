(function() {
  const ignoredDomains = [
    "acellus.com",
    "www.acellus.com",
    "signin.acellus.com"
  ]

  if (!ignoredDomains.includes(window.location.hostname)) {
    window.addEventListener('beforeunload', function(event) {
      event.returnValue = 'Are you sure you want to leave this page?';
    });
  }

  setTimeout(function(){document.querySelectorAll('video').forEach(video => {
    if (video.hasAttribute('disablePictureInPicture')) {
        video.removeAttribute('disablePictureInPicture');
    }
  });}, 5000)
})();
