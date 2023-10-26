const cartButton = document.querySelector('.header__button-cart')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__button-close')

const toggleModal = () => {
  modal.classList.toggle('modal_is-open')
}

cartButton.addEventListener('click', toggleModal)
closeModal.addEventListener('click', toggleModal)