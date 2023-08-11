const menuItems = document.querySelectorAll('.menu .menu-icon, .menu .login');
const menu = document.querySelector('.item-login');
let isMenuOpen = false;

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); 
        if (!isMenuOpen) {
            menu.style.transform = "scale(1)";
            isMenuOpen = true;
        } else {
            menu.style.transform = "scale(0)";
            isMenuOpen = false;
        }
    });
});

menu.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!menu.contains(target)) {
    
        if (isMenuOpen) {
            menu.style.transform = "scale(0)";
            isMenuOpen = false;
        }
    }
});




if (window.matchMedia("(max-width: 700px)").matches) {
    let searchOpen = false;
    const search = document.querySelector('.search');
    const input_pesquisa = document.querySelector('.input-mobile');
    
    search.addEventListener('click', () => {
        if (!searchOpen) {
            input_pesquisa.style.transform = "scale(1)";
            searchOpen = true;
        }
    });

    input_pesquisa.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!search.contains(target) && target !== input_pesquisa && target !== search) {
            if (searchOpen) {
                input_pesquisa.style.transform = "scale(0)";
                searchOpen = false;
            }
        }
    });
}
