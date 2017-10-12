/////////////////////////
// Import 3rd Party JS
/////////////////////////

//@prepros-prepend vendor/flickity.pkgd.min.js


/////////////////////////
// General
/////////////////////////

// remove no-js from html tag
document.documentElement.className = document.documentElement.className.replace("no-js", "js");

// mobile menu
var mobileNavTrigger = document.getElementById('menu-toggle');

// Click the mobileNavTrigger.
mobileNavTrigger.onclick = function() {

    // Toggle class "opened". Set also aria-expanded to true or false.
    if (-1 !== mobileNavTrigger.className.indexOf('opened')) {
        mobileNavTrigger.className = mobileNavTrigger.className.replace(' opened', '');
        mobileNavTrigger.setAttribute('aria-expanded', 'false');
    } else {
        mobileNavTrigger.className += ' opened';
        mobileNavTrigger.setAttribute('aria-expanded', 'true');
    }

};


// jquery document ready
$(function() {

    // home page slider
    $('.customer-testimonials').flickity({
        // options
        cellAlign: 'center',
        contain: true,
        cellSelector: '.hs_cos_wrapper_type_custom_widget',
        imagesLoaded: true
    });

});