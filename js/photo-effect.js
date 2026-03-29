window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-img');
    const heroContent = document.querySelector('.hero-content');

    // Slowly zoom the image and fade it out as we scroll
    if (heroImage) {
        heroImage.style.transform = `scale(${1 + scrolled * 0.0005})`;
        heroImage.style.opacity = 1 - (scrolled / 700);
    }
    
    // Move the text faster than the image (Parallax)
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 400);
    }
});