(function () {
  document.getElementById('y').textContent = String(new Date().getFullYear());

  // Set this to your installer URL when ready:
  // Example: 'https://github.com/USER/REPO/releases/download/v1.2.0/Reality-Client-Setup-1.2.0.exe'
  var DOWNLOAD_URL = 'https://www.mediafire.com/file/lh8g94y1ilwh3r2/Reality.Client.Launcher.Setup.1.6.50.exe/file';

  function bind(id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (DOWNLOAD_URL) {
      el.href = DOWNLOAD_URL;
      el.target = '_blank';
      el.rel = 'noopener';
    } else {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Download ainda não disponível. Tente novamente em breve.');
      });
    }
  }
  bind('dl-main');
  bind('dl-bottom');
  bind('dl-win');
  bind('dl-mac-intel');
  bind('dl-mac-apple');
  bind('dl-linux');

  if (DOWNLOAD_URL) {
    var note = document.getElementById('dl-note');
    if (note) note.textContent = 'Windows installer · Reality Client 1.6.50';
  }

  // Preview slider: troca a cada 5s
  var slides = [
    'assets/mod-menu.png',
    'assets/mercado-moedas.png'
  ];
  var idx = 0;
  var preview = document.getElementById('preview-slider');
  if (preview && slides.length > 1) {
    setInterval(function () {
      preview.style.opacity = '0';
      setTimeout(function () {
        idx = (idx + 1) % slides.length;
        preview.src = slides[idx];
        preview.style.opacity = '1';
      }, 300);
    }, 5000);
  }
})();
