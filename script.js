'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//An anonymous function is a function without a name.
//Reveals modal on html button click
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Hides modal on html button click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//'e' stands for 'event', any vaiable can be used
document.addEventListener('keyup', function (e) {
  console.log(e.key);

  //adds 'hidden' class back on keyup 'Escape'
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
