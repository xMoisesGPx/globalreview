const toggleMenu = document.getElementById('toggleMenu');
        const navbar = document.querySelector('.navbar');
        const menuItems = document.querySelectorAll('.button-group a');

        toggleMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const expanded = navbar.classList.contains('active');
            toggleMenu.setAttribute('aria-expanded', expanded);
            toggleMenu.classList.toggle('active');
        });