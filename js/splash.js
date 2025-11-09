// Create splash screen on page load
(function() {
  // Check if splash was already shown in this session
  if (sessionStorage.getItem('splashShown')) {
    return;
  }

  // Create splash screen element
  const splash = document.createElement('div');
  splash.id = 'splash-screen';
  splash.innerHTML = '<div class="splash-text">Welcome to chika\'s blog</div>';

  // Insert at the beginning of body
  document.body.insertBefore(splash, document.body.firstChild);

  // Remove splash screen after animation completes
  setTimeout(function() {
    splash.classList.add('hide');
    // Mark splash as shown for this session
    sessionStorage.setItem('splashShown', 'true');
  }, 3500); // 2.5s animation + 0.8s fade out + small buffer
})();
