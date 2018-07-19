/////////////////////////
// Import 3rd Party JS
/////////////////////////

//@prepros-prepend vendor/flickity.pkgd.min.js

/////////////////////////
// General
/////////////////////////

// remove no-js from html tag
document.documentElement.className = document.documentElement.className.replace(
    "no-js",
    "js"
);

// mobile menu
var mobileNavTrigger = document.getElementById("menu-toggle");

// Click the mobileNavTrigger.
mobileNavTrigger.onclick = function() {
    // Toggle class "opened". Set also aria-expanded to true or false.
    if (-1 !== mobileNavTrigger.className.indexOf("opened")) {
        mobileNavTrigger.className = mobileNavTrigger.className.replace(
            " opened",
            ""
        );
        mobileNavTrigger.setAttribute("aria-expanded", "false");
    } else {
        mobileNavTrigger.className += " opened";
        mobileNavTrigger.setAttribute("aria-expanded", "true");
    }
};

/////////////////////////
// Home Page
/////////////////////////
$(".customer-testimonials").flickity({
    // options
    cellAlign: "center",
    contain: true,
    cellSelector: ".hs_cos_wrapper_type_custom_widget",
    imagesLoaded: true
});

/////////////////////////
// Contact Page
/////////////////////////
$(".locate-representative-states select").on("change", function() {
    var $currentState = "#hs_cos_wrapper_" + $(this).val();
    $(".locate-representative-content > div.active")
        .removeClass("active")
        .addClass("deactivated");
    $($currentState)
        .removeClass("deactivated")
        .addClass("active");
});

/////////////////////////
// Product Listing Page
/////////////////////////
$(".sidebar-widget-button").on("click", function() {
    $(this)
        .parent()
        .toggleClass("collapsed");
});
