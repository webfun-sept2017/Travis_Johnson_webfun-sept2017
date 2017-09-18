$(document).ready(function() {
  $(document).on("click", "button.btn", function() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var desc = $("#desc").val();

    var link = $("<span></span>")
      .text("Click to view description")
      .addClass("description");

    var contactName = $("<h2></h2>").text(fname + " " + lname);

    var description = $("<p></p>")
      .text(desc)
      .hide();

    var card = $("<div></div>")
      .addClass("col-md-12 card front")
      .append(contactName)
      .append(description)
      .append(link);

    $("form").submit(function() {
      return false;
    });

    $("div#contacts").append(card);

    $("form input, textarea").val("");
  });

  $(document).on("click", "div.card", function() {
    if ($(this).hasClass("front")) {
      $(this)
        .find("h2")
        .fadeOut("slow", function() {
          $(this)
            .siblings("p")
            .fadeIn("slow");
          $(this)
            .siblings("span")
            .text("Click to view name");
        });
      $(this).addClass("back");
      $(this).removeClass("front");
    } else {
      $(this)
        .find("p")
        .fadeOut("slow", function() {
          $(this)
            .siblings("h2")
            .fadeIn("slow");
          $(this)
            .siblings("span")
            .text("Click to view description");
        });

      $(this).addClass("front");
      $(this).removeClass("back");
    }
  });
});
