$(document).ready(function() {
  $("button").click(function() {
    $("#myForm").submit(function() {
      return false;
    });

    if ($("#myForm input").val() !== "") {
      var fname = $("#fname").val();
      var lname = $("#lname").val();
      var email = $("#email").val();
      var contact = $("#contact").val();

      var info = [fname, lname, email, contact];

      $("tbody").append(
        "<tr><td>" +
          fname +
          "</td><td>" +
          lname +
          "</td><td>" +
          email +
          "</td><td>" +
          contact +
          "</td></tr>"
      );

      $("#myForm input").val("");
    }
  });
});
