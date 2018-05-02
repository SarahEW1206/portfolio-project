


function navShrink() {

    //shrink nav height

    $(document).on("scroll", function () {
        if
        ($(document).scrollTop() > 40) {
            $(".sticky-nav").addClass("shrink");
        }
        else {
            $(".sticky-nav").removeClass("shrink");
        }
    });
}

window.onload = navShrink;

