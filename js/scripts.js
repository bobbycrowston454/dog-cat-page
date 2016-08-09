$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>WOOF!</li>");
    $("ul#cat").prepend("<li>MEOW!</li>");
    $("ul#cat").before("<p>WOW! Beautiful...</p>")
  });

  $("button#goodbye").click(function() {
    $("ul#dog").prepend("<li>WOOOF!</li>");
    $("ul#cat").prepend("<li>MEOW!</li>");
    $("ul#dog").before("<p>WOW! SO COOL!</p>")
  });

  $("button#stop").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#picture").click(function() {
    $("#doggy").toggle();
    $("#cat-rm").toggle();
  });
});
