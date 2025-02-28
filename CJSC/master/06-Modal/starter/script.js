'use strict';

//==================================================
//GLOBAL
//==================================================
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
let currentModalIndex = 0;

//==================================================
//CLOSE MODAL FUNCTION
//==================================================
const closeModal = function (event) {
    modal[currentModalIndex].classList.add('hidden');
    overlay.classList.add('hidden');
    currentModalIndex = null;
};

//==================================================
//OPEN MODAL FUNCTION
//==================================================
const openModal = function (event, idx) {
    modal[idx].classList.remove('hidden');
    overlay.classList.remove('hidden');
    currentModalIndex = idx;
};

//==================================================
//ADD MODAL BUTTONS CLICK EVENT
//==================================================
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function (e) {
        openModal(e, i);
    });
}

//==================================================
//CLOSE MODAL  BUTTONS CLICK EVENT
//==================================================
for (let i = 0; i < btnsCloseModal.length; i++) {
    btnsCloseModal[i].addEventListener('click', function (e) {
        closeModal(e);
    });
}
//==================================================
//OVERLAY CLICK EVENT
//==================================================
overlay.addEventListener('click', function (e) {
    closeModal(e);
});

//==================================================
//KEYBOARD EVENT
//==================================================
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'Escape' &&
        !modal[currentModalIndex].classList.contains('hidden')
    )
        closeModal();
});
