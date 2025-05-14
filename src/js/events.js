const items = document.querySelectorAll('.events-item');

items.forEach(item => {
  const title = item.dataset.title;
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.textContent = title;
  item.appendChild(overlay);
});
