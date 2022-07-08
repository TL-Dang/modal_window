'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Btn Clicked');
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
