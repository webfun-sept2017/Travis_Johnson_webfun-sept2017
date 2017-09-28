$(function () {

  // $('#from, #to').datepicker();

  $("form#travel")
    .validator({
      feedback: {
        success: "glyphicon-ok",
        error: "glyphicon-remove"
      },
      custom: {
        greater: function (el) {
          var to = $(el).val();
          var from = $("#from").val();

          if (Date.parse(from) > Date.parse(to)) {
            return "You can't travel to the past fool!";
          }
        }
      }
    })
    .on("submit", function (e) {
      e.preventDefault;
      var name = $("#name").val();
      var leave = $("#from").val();
      var arrive = $("#to").val();

      alert(
        "Thanks " +
        name +
        "! Your Cruise departs on " +
        leave +
        " and returns on " +
        arrive +
        "."
      );
    });
});