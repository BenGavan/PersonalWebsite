function toggleMenu() {
    if (isMenuOpen) {
        mobileNavContainer.classList.add('display-none');
        mobileNavContainer.classList.remove('display-block');
    } else {
        mobileNavContainer.classList.remove('display-none');
        mobileNavContainer.classList.add('display-block');
    }
    isMenuOpen = !isMenuOpen;
}

let isMenuOpen = false;

let menuButton = document.getElementById('menu-btn');
menuButton.addEventListener('click', toggleMenu)

let mobileNavContainer = document.getElementById('mobile-nav-container');