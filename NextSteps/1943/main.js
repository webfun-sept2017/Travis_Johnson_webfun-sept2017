/* 1. Display the hero - DONE
   2. Make the hero move up/down/left/right - DONE
   3. Display all enemies - DONE
   4. Make the enemies move - DONE
   5. When space bar is pressed, have hero shoot a bullet
*/

$(function() {
  var hero = {
    x: 500,
    y: 500
  };

  var enemies = [
    { x: 50, y: 150 },
    { x: 250, y: 300 },
    { x: 450, y: 50 },
    { x: 320, y: 50 },
    { x: 320, y: 50 },
    { x: 320, y: 50 },
    { x: 320, y: 50 }
  ];

  var bullets = [];

  var score = 0;

  function displayHero() {
    $("#hero").css("top", hero.y + "px");
    $("#hero").css("left", hero.x + "px");
  }

  displayHero();

  function displayEnemies() {
    var output = "";

    var rollEnemy = Math.floor(Math.random() * 3 + 1);

    for (var i = 0; i < enemies.length; i++) {
      if (i < 3) {
        output +=
          "<div class='enemy1' style='top:" +
          enemies[i].y +
          "px; left:" +
          enemies[i].x +
          "px;'></div>";
      } else if (i >= 3 && i < 6) {
        output +=
          "<div class='enemy2' style='top:" +
          enemies[i].y +
          "px; left:" +
          enemies[i].x +
          "px;'></div>";
      } else if (i >= 6) {
        output +=
          "<div class='enemy1' style='top:" +
          enemies[i].y +
          "px; left:" +
          enemies[i].x +
          "px;'></div>";
      }
    }

    $("div#enemies").html(output);
  }

  displayEnemies();

  function displayBullets() {
    var output = "";

    for (var i = 0; i < bullets.length; i++) {
      output +=
        "<div class='bullet' style='top:" +
        bullets[i].y +
        "px; left:" +
        bullets[i].x +
        "px;'></div>";
    }

    $("div#bullets").html(output);
  }

  function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].y += 3;
      if (enemies[i].y > 550) {
        enemies[i].y = -20;
        enemies[i].x = Math.floor(Math.random() * 500 + 1);
      }
    }
  }

  function moveBullets() {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].y -= 5;
      if (bullets[i].y < 0) {
        bullets.splice(i, 1);
      }
    }
  }

  function bulletHit() {
    for (var i = 0; i < bullets.length; i++) {
      for (var j = 0; j < enemies.length; j++) {
        if (
          bullets[i].y - enemies[j].y < 10 &&
          Math.abs(bullets[i].x - enemies[j].x) < 10
        ) {
          console.log("hit");
          score += 100;

          var audio = new Audio("boom.wav");
          audio.play();

          var boom =
            "<div class='boom' style='top: " +
            bullets[i].y +
            "px; left:" +
            bullets[i].x +
            "px;'></div>";

          enemies[j].y = -20;
          enemies[j].x = Math.floor(Math.random() * 500 + 1);

          bullets[i].y = -1;

          $("#booms").html(boom);
          $("#booms div.boom").fadeOut("slow");
          $("#score").text(score);
        }
      }
    }
  }

  function heroHit() {
    for (var j = 0; j < enemies.length; j++) {
      if (hero.y - enemies[j].y < 10 && Math.abs(hero.x - enemies[j].x) < 10) {
        console.log("hit");
        score -= 500;

        var audio = new Audio("boom.wav");
        audio.play();

        var boom =
          "<div class='big-boom' style='top: " +
          enemies[j].y +
          "px; left:" +
          enemies[j].x +
          "px;'></div>";

        enemies[j].y = -20;
        enemies[j].x = Math.floor(Math.random() * 500 + 1);

        hero.x = 500;
        hero.y = 500;

        $("#booms").html(boom);
        $("#booms div.big-boom").fadeOut("slow");
        $("#score").text(score);
      }
    }
  }

  function gameLoop() {
    displayHero();
    displayBullets();
    moveBullets();
    moveEnemies();
    displayEnemies();
    bulletHit();
    heroHit();
  }

  setInterval(gameLoop, 30);

  $(document).on("keydown", function(e) {
    /* Movement codes:
        1. Up - 38
        2. Down - 40
        3. Left - 37
        4. Right - 39
        5. Space - 32
    */

    if (e.keyCode == 37) {
      hero.x -= 10;
    } else if (e.keyCode == 39) {
      hero.x += 10;
    }

    if (e.keyCode == 38) {
      hero.y -= 10;
    } else if (e.keyCode == 40) {
      hero.y += 10;
    } else if (e.keyCode == 32) {
      bullets.push({ x: hero.x, y: hero.y });
      console.log(bullets);
    }
  });
});
