const modalOverlay = document.getElementById('modal-overlay');
const closeModalButton = document.getElementById('close-modal-button');
const openModalButtons = document.querySelectorAll('.open-modal-button');

if (closeModalButton && modalOverlay) {
    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });
}

if (openModalButtons.length > 0 && modalOverlay) {
    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            modalOverlay.style.display = 'flex';
            document.body.classList.add('no-scroll');
        });
    });
}
