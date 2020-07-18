const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.front");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
    header.style.padding = "0";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach(item => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// Menu list isotope and filter
$(window).on("load", function() {
  var menuIsotope = $(".menu-container").isotope({
    itemSelector: ".menu-item",
    layoutMode: "fitRows"
  });

  $("#menu-flters li").on("click", function() {
    $("#menu-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    menuIsotope.isotope({
      filter: $(this).data("filter")
    });
  });
});
