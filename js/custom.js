if (
  ($("#archit-slider").owlCarousel({
    autoplay: !1,
    items: 3,
    loop: !0,
    margin: 25,
    singleItem: !1,
    touchDrag: !1,
    mouseDrag: !1,
    pagination: !1,
    nav: !0,
    dots: !1,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsiveClass: !0,
    responsive: {
      0: {
        items: 1,
        autoplay: !0,
        singleItem: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
      },
      480: {
        items: 1,
        autoplay: !0,
        singleItem: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
      },
      568: {
        items: 1,
        autoplay: !0,
        singleItem: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
      },
      600: { items: 2 },
      667: { items: 3 },
      1e3: { items: 3 },
    },
  }),
  $("#elig-slider").owlCarousel({
    autoplay: !1,
    items: 3,
    loop: !0,
    margin: 0,
    singleItem: !1,
    touchDrag: !1,
    mouseDrag: !1,
    pagination: !1,
    nav: !0,
    dots: !1,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsiveClass: !0,
    responsive: {
      0: {
        items: 1,
        autoplay: !0,
        singleItem: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
      },
      480: {
        items: 1,
        autoplay: !0,
        singleItem: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
      },
      568: {
        items: 1,
        autoplay: !0,
        singleItem: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
      },
      600: { items: 2 },
      667: { items: 3 },
      1e3: { items: 3 },
    },
  }),
  $("#students-slider").owlCarousel({
    autoplay: !0,
    items: 3,
    loop: !0,
    margin: 15,
    singleItem: !0,
    touchDrag: !0,
    mouseDrag: !0,
    pagination: !0,
    nav: !0,
    dots: !1,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsiveClass: !0,
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      568: { items: 1 },
      600: { items: 2 },
      667: { items: 3 },
      1e3: { items: 3 },
    },
  }),
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "linear",
    scrollTime: 600,
    activeClass: "is-active-top-nav__1level",
    onPageChange: null,
    topOffset: -150,
  }),
  $(".js-scroll-trigger").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  }),
  $(".wow").length)
) {
  var a;
  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: !0,
    live: !0,
  }).init();
}
if (
  ($("input,textarea")
    .focus(function () {
      $(this)
        .data("placeholder", $(this).attr("placeholder"))
        .attr("placeholder", "");
    })
    .blur(function () {
      $(this).attr("placeholder", $(this).data("placeholder"));
    }),
  $("#back-top").length)
) {
  var e = 100,
    t = function () {
      $(window).scrollTop() > e
        ? $("#back-top").addClass("show")
        : $("#back-top").removeClass("show");
    };
  t(),
    $(window).on("scroll", function () {
      t();
    }),
    $("#back-top").on("click", function (a) {
      a.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 700);
    });
}
var stickyNavTop = $("#header").offset().top,
  stickyNav = function () {
    $(window).scrollTop() > stickyNavTop
      ? $("#header").addClass("sticky")
      : $("#header").removeClass("sticky");
  };
stickyNav(),
  $(window).scroll(function () {
    stickyNav();
  }),
  $('a[href^="#applyBox"]').on("click", function (a) {
    var e = $(this.getAttribute("href"));
    e.length &&
      (a.preventDefault(),
      $("html, body").stop().animate({ scrollTop: e.offset().top }, 1e3));
  }),
  $(document).scroll(function () {
    $(this).scrollTop() > 300
      ? $("#sideNavi").fadeIn()
      : $("#sideNavi").fadeOut();
  });
