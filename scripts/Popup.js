export function openPopup (popup, selector) {
  const overlay = document.querySelector(selector);
  overlay.classList.add('overlay_active');
  document.addEventListener('keydown', escape)
  overlay.addEventListener('click',  (evt) => {
    if (evt.target.classList.contains('overlay') || evt.target.classList.contains('popup__close')) {
      closePopup (overlay);
      document.removeEventListener('keydown', escape)
    }
  });
}

export function closePopup (popup) {
  popup.classList.remove('overlay_active')
  document.removeEventListener('keydown', escape)
}

function escape (evt) {
  const popupOpen = document.querySelector('.overlay_active')
    if (evt.key === 'Escape') {
      closePopup(popupOpen)
    }
}