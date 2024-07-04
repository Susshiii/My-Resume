// scripts.js
document.addEventListener('click', function (e) {
    const menuContainer = document.querySelector('.menu-container');
    if (!menuContainer.contains(e.target)) {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});
