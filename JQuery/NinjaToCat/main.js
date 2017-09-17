$(document).ready(function() {
  $("div.item img").click(function() {
    var src = $(this).attr("src");
    var alt = $(this).attr("alt");
    var dataSrc = $(this).attr("data-alt-src");
    var dataAlt = $(this).attr("data-alt");

    if (src.indexOf("cat")) {
      $(this).attr("src", dataSrc);
      $(this).attr("data-alt-src", src);
      $(this).attr("alt", dataAlt);
      $(this).attr("data-alt", alt);
    }
  });
});
