/**
 * Toggle class to open the mobile navigation and switch the nav button icon.
 */
function toggleNav() {
    $("#nav-list").toggleClass("nav-list--open");
    $("#nav-button").toggleClass("nav-button--open-nav");
}

window.addEventListener("resize", function() {
    let $navList = $("#nav-list");
    let $navButton = $("#nav-button");

    if (window.innerWidth > 900) {
        $navList.removeClass("nav-list--open");
        $navButton.removeClass("nav-button--open-nav");
    }
});
