// Typed.js
const myText = new AutoTyping({
  id: 'typed',
  typeText: ['Francesco Santoro  ', 'a Software Developer  ', 'a Musician  ', 'a Drummer  '],
  textColor: '#fdd228',
  cursor: '_',
  cursorColor: '#fff',
  deleteSpeed: 50,
}).init();

function copyText() {
  // Seleziona il contenitore del contatto email
  const emailContainer = document.querySelector('.wrapper-contact.mail .class2 span');

  if (emailContainer) {
    const email = emailContainer.textContent.trim(); // Prende il testo e rimuove gli spazi

    // Controlla se l'email è stata trovata e copiata
    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Mostra la notifica di successo
        const notification = document.createElement('div');
        notification.textContent = 'Copied!';
        notification.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #fdd228;
          color: #121212;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.5s ease;
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
          notification.style.opacity = '1';
        }, 10);

        setTimeout(() => {
          notification.style.opacity = '0';
          notification.addEventListener('transitionend', () => {
            notification.remove();
          });
        }, 3000);
      })
      .catch((err) => {
        console.error('Errore nella copia del testo:', err);
      });
  } else {
    console.error('Elemento email non trovato.');
  }
}
