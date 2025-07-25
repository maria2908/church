

$("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});

$("[data-scroll]").on("click", function (e) {
    e.preventDefault();
    let target = $(this).data("scroll");
    let offsetTop = $(target).offset().top;

    $("html, body").animate({
        scrollTop: offsetTop
    }, 700);

    // Optionally close menu after clicking
    $("#nav").removeClass("active");
    $("#nav_toggle").removeClass("active");
});
