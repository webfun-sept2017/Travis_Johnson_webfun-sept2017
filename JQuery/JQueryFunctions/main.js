$(document).ready(function () {
  var msg = $('#msg-text').val();

  $("button#addClass").click(function () {
    $("p#addClassTarget").toggleClass("big-red");
  });

  $("button#hide").click(function () {
    $("#hideTarget").hide("slow");
  });

  $("button#show").click(function () {
    $("#hideTarget").show("slow");
  });

  $("button#slideToggle").click(function () {
    $("img#deadpool").slideToggle();
  });

  $("button#fadeToggle").click(function () {
    $("img#deadpool").fadeToggle();
  });

  $("button#slideUp").click(function () {
    $("img#deadpool").slideUp();
  });

  $("button#slideDown").click(function () {
    $("img#deadpool").slideDown();
  });

  $("button#change-text").click(function () {
    $("#phchange").attr("placeholder", $("#input-text").val());

    if ($("#input-text").val() !== "") {
      $("#phlabel").text("My placeholder text has changed!");
    }
  });

  $('button#append-text').click(function () {
    $('p#append').append('<span>This text has been appended! <span>');
    $('p#append span').css({
      'font-weight': 'bold',
      'font-style': 'italic'
    });
  });

  $('button#resetText').click(function () {
    $('p#append span').remove();
  });

  $('button#before').click(function () {
    $('p#before-after').before("<p class=\"big-red\">Adds an element before the target.</p>");
  });

  $('button#after').click(function () {
    $('p#before-after').after("<p class=\"big-red\">Adds an element after the target.</p>");
  });

  $('button#ba-reset').click(function () {
    $('div.ba p.big-red').remove();
  });

  $('#msg-text').on('keyup', function () {
    msg = $('#msg-text').val();
    if (msg.length > 2) {
      $('button#bind-msg').removeAttr('disabled');
    } else {
      $('button#bind-msg').attr('disabled', 'disabled');
    }
  })

  $('button#bind-msg').click(function () {
    $('div').data('message', msg);
    $('button#display-msg').removeAttr('disabled');
  });
  $('button#display-msg').click(function () {
    alert($('div').data('message'));
  });
});