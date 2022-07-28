jQuery(".stellarnav").stellarNav({
  theme: "plain",
  breakpoint: 767,
  menuLabel: "",
  position: "right",
});

if (window.location.hash) scroll(0, 0);

setTimeout(function () {
  scroll(0, 0);
}, 1);

$(".scrollonclick").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top + "px",
    },
    1000,
    "swing"
  );
});
