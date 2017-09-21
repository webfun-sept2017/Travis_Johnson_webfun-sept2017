$(document).ready(function () {
  for (var i = 1; i < 152; i++) {
    var pokeImg = $("<img>").attr(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
      i +
      ".png"
    );
    var pokemon = $("<div></div>")
      .attr("id", i)
      .addClass("col-md-2 flex")
      .append(pokeImg);

    $("div.poke-pen").append(pokemon);
  }

  function getPokeInfo(id) {
    $.get(
      "https://pokeapi.co/api/v2/pokemon/" + id + "/",
      function (res) {
        var image = $("<img>").attr("src", res.sprites.front_shiny);
        var name = $("<h2></h2>").text(res.name);

        var list = $("<ul></ul>");
        var height = $("<li></li>").text("Height: " + res.height);
        var weight = $("<li></li>").text("Weight: " + res.weight);
        var attList = $("<ul></ul>");

        for (i = 0; i < res.abilities.length; i++) {
          attList.append("<li>" + res.abilities[i].ability.name + "</li>");
        }
        list.append(height);
        list.append(weight);

        var details = $("<div></div>")
          .addClass("col-md-10 content-self-center poke-details")
          .append(image)
          .append(name)
          .append(list)
          .append("<h5>Abilities:</h5>")
          .append(attList);

        console.log(image);

        $("div.poke-info").html(details);
      },
      "json"
    );
  }

  //Pre-load the first Pokemon
  getPokeInfo(1);

  $("div.flex").click(function () {
    var id = $(this).attr("id");
    getPokeInfo(id);
  });


});