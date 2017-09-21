$(document).ready(function () {

  for (var i = 1; i < 152; i++) {
    var pokeImg = $('<img>').attr('src', "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png");
    var pokemon = $('<div></div>').addClass('flex').append(pokeImg);

    $('div.container').append(pokemon);
  }
});