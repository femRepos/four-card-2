let cards = document.querySelectorAll('.card');

// all cards pseudo element have a color according to their attribute
cards.forEach(card => {
    let color = card.getAttribute('data-color');
    card.style.setProperty('--temp', color);
});
