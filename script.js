$(document).ready(function () {
  $("#bars").on("click", function () {
    $(this).toggleClass("fa-times");
    $("#e-links").addClass("-translate-x-full");
    $("#layer2").addClass("-z-30 opacity-0").removeClass("z-30 opacity-20");
    $("header nav").toggleClass("max-h-screen");
    if ($(this).hasClass("fa-times")) {
      $("#layer").addClass("z-30 opacity-20").removeClass("-z-30 opacity-0");
    } else {
      $("#layer").addClass("-z-30 opacity-0").removeClass("z-30 opacity-20");
    }
  });
  $(window).on("click", function (e) {
    if (e.target.id == "layer") {
      $("#layer").addClass("-z-30 opacity-0").removeClass("z-30 opacity-20");
      $(".fa-bars").toggleClass("fa-times");
      $("header nav").toggleClass("max-h-screen");
    }
  });
  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $("header nav").removeClass("max-h-screen");
    $("#layer").addClass("-z-30 opacity-0").removeClass("z-30 opacity-20");
    $("#e-links").addClass("-translate-x-full");
    $("#layer2").addClass("-z-30 opacity-0").removeClass("z-30 opacity-20");
  });

  $("#open-elink").on("click", function () {
    $("#e-links").toggleClass("-translate-x-full");
    if ($("#e-links").hasClass("-translate-x-full")) {
      $("#layer2").addClass("-z-30 opacity-0").removeClass("z-30 opacity-20");
    } else {
      $("#layer2").addClass("z-30 opacity-20").removeClass("-z-30 opacity-0");
    }
  });
  $(window).on("click", function (e) {
    if (e.target.id == "layer2") {
      $("#layer2").addClass("-z-30 opacity-0").removeClass("z-30 opacity-20");
      $("#e-links").addClass("-translate-x-full");
    }
  });
  $("#e-links h1").each(function (i, e) {
    $(e).on("click", function () {
      let eLink = this.nextElementSibling;
      $(eLink).toggleClass("max-h-max");
      autoTutup(i);
    });
  });

  function autoTutup(i) {
    $("#e-links h1").each(function (i2, e2) {
      let eLink2 = this.nextElementSibling;
      if (i != i2) {
        $(eLink2).removeClass("max-h-max");
        $(e2).removeClass("max-h-max");
      }
    });
  }
});
