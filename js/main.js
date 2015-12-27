$(".club").click(function() {
  // $(this).hide();
  if ($(this).children().hasClass("dynamo")) {
    $(".dynamo-info").show();
  }
  else {
    $(".mancity-info").show();
  }
});