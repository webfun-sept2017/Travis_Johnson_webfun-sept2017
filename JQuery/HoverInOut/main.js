$(document).ready(function() {
  $("img").hover(
    function() {
      var src = $(this).attr("src");
      var altSrc = $(this).attr("alt-src");

      $(this).attr("src", altSrc);
      $(this).attr("alt-src", src);
    },
    function() {
      var src = $(this).attr("src");
      var altSrc = $(this).attr("alt-src");

      $(this).attr("src", altSrc);
      $(this).attr("alt-src", src);
    }
  );
});
