function toggleMode() {
  const root = document.documentElement;
  root.classList.toggle('light');

  const img = document.querySelector("#profile img");

  if (root.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    img.setAttribute('src', './assets/avatar.png');
  };
};