$mancityInfo = $(".mancity-info");
$dynamoInfo = $(".dynamo-info");
$club = $(".club");

$club.first().on("click", function() {
  $mancityInfo.slideUp();
  $dynamoInfo.slideToggle();
});

$club.eq(1).on("click", function() {
  $dynamoInfo.slideUp();
  $mancityInfo.slideToggle();
});