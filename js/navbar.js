const burgBtn = document.querySelector('.burger-button');
const navMenu = document.querySelector('.navbar-menu');
let isShow = false
let isTransit = false

// on burger button click
burgBtn.addEventListener('click', function(event){
    if (isTransit === false) {
        if (isShow === true) {
            // SHRINK

            // get total height
            const height = navMenu.getBoundingClientRect().height;

            // replace auto, set height to total height instead
            navMenu.style.height = navMenu.getBoundingClientRect().height + 'px';
            
            // wait for next frame
            window.requestAnimationFrame(function(){
                // set height to 0
                isTransit = true;
                navMenu.style.height = '0px';
                navMenu.style.transition = 'height 0.35s ease';
                navMenu.style.overflow = 'hidden';
            });

        } else {
            // EXPAND

            // get total height
            navMenu.style.display = 'flex';
            const height = navMenu.getBoundingClientRect().height;
            navMenu.style.display = '';

            // set display to flex and height to 0px
            navMenu.style.display = 'flex';
            navMenu.style.height = '0px';
            
            // wait for next frame
            window.requestAnimationFrame(function(){
                // set height to total height
                isTransit = true;
                navMenu.style.height = height + 'px';
                navMenu.style.transition = 'height 0.35s ease';
                navMenu.style.overflow = 'hidden';
            });
        }
        
    }
});
// on nav menu transition end
navMenu.addEventListener('transitionend', function(event){
    if (event.target === navMenu) {
        isTransit = false;

        if (isShow === true) {
            // FROM SHRINK

            // remove all inline styles
            navMenu.removeAttribute('style');

            // update flag
            isShow = false;
            
        } else {
            // FROM EXPAND

            // remove all inline styles
            navMenu.removeAttribute('style');

            // set display to flex and height to auto
            navMenu.style.display = 'flex';
            navMenu.style.height = 'auto';

            // update flag
            isShow = true;
        }
        
    }
});

// NAV SERVICES AND SERV MENU ==========================================================================
const services = document.querySelector('.services');
const servMenu = document.querySelector('.serv-menu');
let isServShow = false
let isServTransit = false

// on services button click (in nav bar)
services.addEventListener('click', function(){
    if (isServTransit === false) {
        if (isServShow === true) {
            // SHRINK

            // get total height
            const height = servMenu.getBoundingClientRect().height;

            // replace auto, set height to total height instead
            servMenu.style.height = servMenu.getBoundingClientRect().height + 'px';
            
            // wait for next frame
            window.requestAnimationFrame(function(){
                // set height to 0
                isServTransit = true;
                servMenu.style.height = '0px';
                servMenu.style.transition = 'height 0.35s ease';
                servMenu.style.overflow = 'hidden';
            });
            
        } else {
            // EXPAND

            // get total height
            servMenu.style.display = 'flex';
            const height = servMenu.getBoundingClientRect().height;
            servMenu.style.display = '';

            // set display to flex and height to 0px
            servMenu.style.display = 'flex';
            servMenu.style.height = '0px';
            
            // wait for next frame
            window.requestAnimationFrame(function(){
                // set height to total height
                isServTransit = true;
                servMenu.style.height = height + 'px';
                servMenu.style.transition = 'height 0.35s ease';
                servMenu.style.overflow = 'hidden';
            });
            
        }
    }
});
// on serv menu transition end
servMenu.addEventListener('transitionend', function(event){
    if (event.target === servMenu) {
        isServTransit = false;

        if (isServShow === true) {
            // FROM SHRINK

            // remove all inline styles
            servMenu.removeAttribute('style');

            // update flag
            isServShow = false;
            
        } else {
            // FROM EXPAND

            // remove all inline styles
            servMenu.removeAttribute('style');

            // set display to flex and height to auto
            servMenu.style.display = 'flex';
            servMenu.style.height = 'auto';

            // update flag
            isServShow = true;
        }
        
    }
});