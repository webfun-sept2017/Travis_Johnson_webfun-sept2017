$(document).ready(function() {
  $(".ninja img").hide();
  $(".ninja img").fadeIn(4000);

  $(".ninja img").click(function() {
    $(this).fadeOut("slow");
  });

  $("button#reset").click(function() {
    $(".ninja img").fadeIn("slow");
  });
});
