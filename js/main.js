/////////////////////////
// Import 3rd Party JS
/////////////////////////

//@prepros-prepend vendor/flickity.pkgd.min.js
//@prepros-prepend vendor/jquery.dynatable.js
//@prepros-prepend vendor/jquery.magnific-popup.min.js

$(document).ready(function() {
    /////////////////////////
    // General
    /////////////////////////

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
    $(".hero-slider-1").flickity({
        cellSelector: ".hero-section",
        autoPlay: true,
        prevNextButtons: false,
        pageDots: false
    });

    $(".customer-testimonials").flickity({
        cellAlign: "center",
        contain: true,
        cellSelector: ".hs_cos_wrapper_type_custom_widget",
        imagesLoaded: true
    });

    $(".customer-logos .hs_cos_wrapper_type_widget_container").flickity({
        cellAlign: "center",
        contain: true,
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: true,
        wrapAround: true
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

    /////////////////////////
    // Product Page
    /////////////////////////

    // product thumbnails
    $(".more-images a").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $(".more-colors-gallery__black").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $(".more-colors-gallery__blue").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $(".more-colors-gallery__brown").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $(".more-colors-gallery__green").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $(".more-colors-gallery__red").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });

    // request a sample modal
    $(".modal-trigger").on("click", function(e) {
        e.preventDefault();
        var modal_id = $(this).attr("href");
        $(modal_id).show();
    });
    $(".close").on("click", function() {
        $(this)
            .parent()
            .parent()
            .hide();
    });

    // specification tabs
    $(".tab a").on("click", function(e) {
        e.preventDefault();

        $(".tab a").removeClass("active");
        $(this).addClass("active");

        $(".tabcontent").removeClass("visible");
        var tab_id = $(this).attr("href");
        $(tab_id).addClass("visible");
    });

    $("#cross-table").dynatable();
});
