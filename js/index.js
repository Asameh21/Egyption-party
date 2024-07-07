///<reference types="../@types/jquery" />;

const asideWidth = $("aside").outerWidth();
const counterOffset = $("#counter").offset().top;
const time = new Date().getDay();
let seconds = localStorage.getItem("seconds");
let minutes = localStorage.getItem("minutes");
let hours = localStorage.getItem("hours");
let days = localStorage.getItem("days");
$(".open").on("click", function () {
  $("aside").css("transform", "translateX(0)");
  $(".open").css("transform", `translateX(${asideWidth}px)`);
  $(".hero-section h1").css("transform", `translateX(${asideWidth / 2}px)`);
  $(".hero-section p").css("transform", `translateX(${asideWidth / 2}px)`);
});

$(".close-btn").on("click", function () {
  $("aside").css("transform", "translateX(-100%)");
  $(".open").css("transform", `translateX(0px)`);
  $(".hero-section h1").css("transform", `translateX(0px)`);
  $(".hero-section p").css("transform", `translateX(0px)`);
});

$(".singer h3").on("click", function () {
  $(".singer p").slideUp(500);
  if ($(this).siblings("p").css("display") === "block") {
    $(this).siblings("p").slideUp(500);
  } else {
    $(this).siblings("p").slideDown(500);
  }
});

$(`aside a[href ^="#"]`).on("click", function () {
  const eleId = $(this).attr("href");
  const sectionOffset = $(eleId).offset().top;
  $("html, body").animate({ scrollTop: sectionOffset }, 3000);
});
function counter() {
  $(".seconds .time span").html(seconds);
  $(".minutes .time span").html(minutes);
  $(".hours .time span").html(hours);
  $(".days .time span").html(days);
  seconds--;
  localStorage.setItem("seconds", seconds);
  if (seconds < 0) {
    seconds = 60;
    minutes++;
    localStorage.setItem("minutes", minutes);
  }
  if (minutes > 60) {
    minutes = 0;
    hours++;
    localStorage.setItem("hours", hours);
  }
  if (hours > 24) {
    hours = 0;
    days++;
    localStorage.setItem("days", days);
  }
}
setInterval(counter, 1000);


$("textarea").on("input", function () {
  let remaining = 100 - $(this).val().length;

  if (remaining <= 0) {
    $("#char-counter").html("Your available characters have finished");
  } else {
    $("#char-counter").html(remaining);
  }
});
