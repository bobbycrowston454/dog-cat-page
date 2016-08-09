$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>WOOF!</li>");
    $("ul#cat").prepend("<li>MEOW!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#dog").prepend("<li>WOOOF!</li>");
    $("ul#cat").prepend("<li>MEOW!</li>");
  });

  $("button#stop").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
});
