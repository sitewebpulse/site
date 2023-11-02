//Menu
document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.querySelector('.open-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const menu = document.querySelector('.menu');

    openMenuBtn.addEventListener('click', function() {
        menu.style.display = 'flex';
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', function() {
        menu.style.display = 'none';
        openMenuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
    });
}); 

