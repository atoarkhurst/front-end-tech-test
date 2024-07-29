document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('videoModal');
    var closeButton = document.getElementById('closeButton');
    var playButton = document.querySelector('.video-card .play-icon');
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var mobileNav = document.querySelector('.mobile-nav');

    playButton.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    hamburgerMenu.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });
});
