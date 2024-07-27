/* Author: Cody Dobbs */   
/* File: script.js */
/* Date: 7/24/24 */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
