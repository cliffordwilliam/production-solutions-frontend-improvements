const heroImg2 = document.querySelector('.hero-img-2');

// flips opacity
function fadeInOut() {
    if (heroImg2.style.opacity === '1') {
        heroImg2.style.opacity = '0';
    } else {
        heroImg2.style.opacity = '1';
    }
}

// when transition is over, wait 3s before flipping again
heroImg2.addEventListener('transitionend', function(event){
    if (event.target === heroImg2) {
        setTimeout(fadeInOut, 3000);
    }
});

// initial wait 3s and flip
setTimeout(fadeInOut, 3000);

// BOTTOM HERO FADE IN OUT ==========================================================================
const bottomHeroImg2 = document.querySelector('.bottom-hero-img-2');

// flips opacity
function bottomFadeInOut() {
    if (bottomHeroImg2.style.opacity === '1') {
        bottomHeroImg2.style.opacity = '0';
    } else {
        bottomHeroImg2.style.opacity = '1';
    }
}

// when transition is over, wait 3s before flipping again
bottomHeroImg2.addEventListener('transitionend', function(event){
    if (event.target === bottomHeroImg2) {
        setTimeout(bottomFadeInOut, 3000);
    }
});

// initial wait 3s and flip
setTimeout(bottomFadeInOut, 3000);