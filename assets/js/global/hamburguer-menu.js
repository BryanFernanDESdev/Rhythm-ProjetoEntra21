function changeMenu(){
    const menu = document.querySelector('#menu-hamburguer')
    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
}

