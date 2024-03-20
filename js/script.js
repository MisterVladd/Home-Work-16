$(document).ready(function () {
  $(".burger-close-item, .burger-open, .burger-close-outside").click(function (event) {
    $(".burger-close, .header__list, .burger-close-outside, .burger-open").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
