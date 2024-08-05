document.addEventListener('DOMContentLoaded', function () {
    // Get modal and buttons
    var modal = document.getElementById('videoModal');
    var closeButton = document.getElementById('closeButton');
    var playButton = document.querySelector('.video-card .play-icon');
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var mobileNav = document.querySelector('.mobile-nav');

    // Open modal when play button is clicked
    playButton.addEventListener('click', function () {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    });

    // Close modal when close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });

    // Toggle mobile navigation menu
    hamburgerMenu.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
        hamburgerMenu.classList.toggle('open');
    });

    // Add click event listeners for dropdowns
    var dropdownLinks = document.querySelectorAll('.mobile-nav .top-nav-link');
    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var dropdownWrapper = this.nextElementSibling;
            dropdownWrapper.classList.toggle('open');
            var isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });
});
