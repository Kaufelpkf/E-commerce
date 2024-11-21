document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const images = carouselWrapper.children;
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    carouselWrapper.appendChild(firstClone);
    carouselWrapper.insertBefore(lastClone, images[0]);

    let currentIndex = 1;
    const imageWidth = images[0].clientWidth;
    carouselWrapper.style.transform = `translateX(-${imageWidth}px)`;

    function showNextImage() {
        if (currentIndex >= images.length - 1) {
            currentIndex = 1;
            carouselWrapper.style.transition = 'none';
            carouselWrapper.style.transform = `translateX(-${imageWidth}px)`;
        } else {
            currentIndex++;
            carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
            carouselWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
    }

    function showPrevImage() {
        if (currentIndex <= 0) {
            currentIndex = images.length - 2;
            carouselWrapper.style.transition = 'none';
            carouselWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        } else {
            currentIndex--;
            carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
            carouselWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
    }

    document.querySelector('.carousel-btn.right').addEventListener('click', showNextImage);
    document.querySelector('.carousel-btn.left').addEventListener('click', showPrevImage);
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sideNav.classList.add('open'); 
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open'); 
    });

    window.addEventListener('click', (event) => {
        if (event.target === sideNav) {
            sideNav.classList.remove('open');
        }
    });
});


