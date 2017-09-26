/* 
List of features to build:

1) Have JS display the world of brick/coin/etc...
2) Have the pacman move up and down
3) Change the direction of the pacman based on movement
4) Keep score
5) Add a ghost
6) Add game over messaging

*/

$(document).ready(function() {
  var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 2, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 4, 2, 4, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ];

  $("div#game-over").hide();

  function displayWorld() {
    var output = "";

    for (var i = 0; i < world.length; i++) {
      output += "<div class='row'>";

      for (var j = 0; j < world[i].length; j++) {
        if (world[i][j] === 2) {
          output += "<div class='brick'></div>";
        } else if (world[i][j] === 1) {
          output += "<div class='coin'></div>";
        } else if (world[i][j] === 0) {
          output += "<div class='empty'></div>";
        } else if (world[i][j] === 4) {
          output += "<div class='cherry'></div>";
        }
      }
      output += "</div>";
    }
    $("div.world").html(output);
    //console.log(output);
  }

  //Add Pacman
  var pacman = {
    x: 1,
    y: 1
  };

  function displayPacman() {
    $("div#pacman").css({
      top: pacman.y * 20 + "px",
      left: pacman.x * 20 + "px"
    });
  }

  displayPacman();

  //Add Orange Ghost
  var orangeGhost = {
    x: 9,
    y: 1
  };

  function displayOrangeGhost() {
    $("div#orange-ghost").css({
      top: orangeGhost.y * 20 + "px",
      left: orangeGhost.x * 20 + "px"
    });
  }

  displayOrangeGhost();

  var score = 0;

  var lives = 3;

  $(document).on("keydown", function(e) {
    //right
    if (e.keyCode == 39) {
      if (world[pacman.y][pacman.x + 1] == 2) {
        pacman.x--;
      }
      pacman.x++;
      $("div#pacman").removeClass();
    }

    //left
    if (e.keyCode == 37) {
      if (world[pacman.y][pacman.x - 1] == 2) {
        pacman.x++;
      }
      pacman.x--;

      $("div#pacman").removeClass();
      $("div#pacman").addClass("left");
    }
    //down
    if (e.keyCode == 40) {
      if (world[pacman.y + 1][pacman.x] == 2) {
        pacman.y--;
      }
      pacman.y++;
      $("div#pacman").removeClass();
      $("div#pacman").addClass("down");
    }
    //up
    if (e.keyCode == 38) {
      if (world[pacman.y - 1][pacman.x] == 2) {
        pacman.y++;
      }
      pacman.y--;
      $("div#pacman").removeClass();
      $("div#pacman").addClass("up");
    }

    //Eat the coins
    if (world[pacman.y][pacman.x] == 1) {
      score += 10;
      world[pacman.y][pacman.x] = 0;
    }

    if (world[pacman.y][pacman.x] == 4) {
      score += 50;
      world[pacman.y][pacman.x] = 0;
    }

    //Ghost gets pacman
    if (world[pacman.y][pacman.x] == world[orangeGhost.y][orangeGhost.x]) {
      pacman.x = orangeGhost.x;
      pacman.y = orangeGhost.y;
      $("div#pacman").fadeOut("slow");
      $("div#game-over").fadeIn("slow");
    }

    //Hit detection
    console.log(score);
    $("span.score").text(score);
    displayPacman();
    displayWorld();
  });

  displayWorld();
});
