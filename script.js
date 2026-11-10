console.debug('hello xqf');

document.addEventListener('DOMContentLoaded', () => {
  const houseButton = document.getElementById('houseButton');

  if (!houseButton) {
    return;
  }

  houseButton.addEventListener('click', () => {
    alert('Das Haus mit Garten wurde angeklickt!');
  });
});
