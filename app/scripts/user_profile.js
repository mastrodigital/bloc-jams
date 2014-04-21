
var onclick = function(Event) {

  $(".page-nav li").removeClass("active");
  $(this).parent().addClass("active");
  $(".tab").addClass("hidden");
  var containerName = $(this).parent().attr("data-tab-container");
  $("." + containerName).removeClass("hidden");
  
};


if (document.URL.match(/\/user/)) {
  $(document).ready(function() {
    $(".page-nav a").click(onclick);
    $(".page-nav a")[0].click();
  });
}
