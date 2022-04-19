function makeOverlayNav(){
    const nav = document.querySelector('nav');
    nav.classList.add('hide');
    nav.insertAdjacentHTML('beforebegin','<button class="menu-open"><i class="fa-solid fa-bars"></i></button>');
    nav.insertAdjacentHTML('beforeend','<button class="menu-close">X</button>');
    const btnMenuOpen = document.querySelector('.menu-open');
    const btnMenuClose = document.querySelector('.menu-close');
    btnMenuOpen.addEventListener('click',function(e){
      e.preventDefault();
      nav.classList.remove('hide');
    })
    btnMenuClose.addEventListener('click',function(e){
      e.preventDefault();
      nav.classList.add('hide');
    })
  }
  
  if(document.querySelector('nav')){
    makeOverlayNav();
  }