$(document).ready(function() {
  var houses = [
    "Lannister",
    "House Stark of Winterfell",
    "Targaryen",
    "Baratheon"
  ];

  //Baratheon 16
  //Lannister 229
  //Targaryen 378
  //Stark 362

  $("img").click(function() {
    var id = $(this).attr("id");

    $.get(
      "https://www.anapioficeandfire.com/api/houses/" + id,
      function(res) {
        var name = res.name;
        var words = res.words;
        var titles = res.titles;
        console.log(titles);

        $("#name").text(name);
        $("#words").text(words);
        $("#titles").text(titles);
      },
      "json"
    );

    console.log(name);
  });
});
