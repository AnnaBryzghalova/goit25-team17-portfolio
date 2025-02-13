document.addEventListener('DOMContentLoaded', function () {
  const modalHeader = document.querySelector('.modal-header');
  const modalBtnClose = document.querySelector('.modal-btn-close');
  const btnMenu = document.querySelector('.header-icon-burger');
  const menuLinks = document.querySelectorAll('.menu-list a');
  const btnOrderProject = document.querySelector('.button-order-project');
  const btnMenuModal = document.querySelector('.btn-menu');
  const menuCenterOpen = document.querySelector('.menu-center-open');
  const menuCenterList = document.querySelector('.menu-center-list');

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  function openModal() {
    modalHeader.classList.add('is-open');
    modalBtnClose.style.display = 'flex';
    disableScroll();
  }

  function closeModal() {
    modalHeader.classList.remove('is-open');
    modalBtnClose.style.display = 'none';
    enableScroll();
  }

  modalBtnClose.addEventListener('click', closeModal);
  btnMenu.addEventListener('click', openModal);
  btnOrderProject.addEventListener('click', closeModal);
  btnMenuModal.addEventListener('click', closeModal);
  menuLinks.forEach(link => link.addEventListener('click', closeModal));

  menuCenterOpen.style.cursor = 'pointer';
  btnMenu.style.cursor = 'pointer';
  modalBtnClose.style.cursor = 'pointer';
  btnMenuModal.style.cursor = 'pointer';
  btnOrderProject.style.cursor = 'pointer';

  menuCenterOpen.addEventListener('click', function () {
    menuCenterList.classList.toggle('is-open');
  });

  menuCenterList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      menuCenterList.classList.remove('is-open');
    });
  });
});
