
  // МЕНЮ БУРГЕР

    let burger = document.querySelector('.burger')
    let burgerClose = document.querySelector('.burger-close')
    let mobileMenuOpen = document.querySelector('.cottage-list')
    burger.addEventListener('click', (e) => {
        mobileMenuOpen.classList.add('cottage-list-active') 
        document.body.classList.add("overlay");
    
     
  })
 burgerClose.addEventListener('click', () => {
    mobileMenuOpen.classList.remove('cottage-list-active')
    document.body.classList.remove("overlay"); 
  })
  
  // Якщо клік іде по мобільному меню, то видалити його
  document.addEventListener('click', (e) => {
    if( 
      e.target.classList.contains("cottage-list-active")
    ) {
    mobileMenuOpen.classList.remove('cottage-list-active') 
    document.body.classList.remove("overlay"); 
    }
  })
    
  // Якщо клік не йде по бургеру, а меню відкрите - закрити його
  document.addEventListener('click', (e) => {
    if( 
      !e.target.closest(".burger")
    ) {
      mobileMenuOpen.classList.remove('cottage-list-active') 
      document.body.classList.remove("overlay"); 
    }
  })
// Медіа для JS/ Скролл меню до 768px
// function myFunction(x) {
//   let header = document.getElementById('header')
//   if (x.matches) { // If media query matches
//     window.onscroll = function(){
//       if(window.pageYOffset > 200){
//           header.classList.add('header-scrolled')
//       }else{
//           header.classList.remove('header-scrolled') 
//       }
//     }
   
//   }
// }

// let x = window.matchMedia("(min-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes


let header = document.getElementById('header')
window.onscroll = function(){
  if(window.pageYOffset > 400){
      header.classList.add('header-scrolled')
  }else{
      header.classList.remove('header-scrolled') 
  }
}

