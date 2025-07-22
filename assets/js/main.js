

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

document.addEventListener("DOMContentLoaded", function () {
const calendar = document.querySelector('[data-ortox-id="regensburgCalendar"]');
if (calendar) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    calendar.setAttribute('data-ortox-day', formattedDate);
}
});