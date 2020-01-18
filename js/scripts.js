
//
// $(document).ready(function() {
//   var age = parseInt(prompt("How old are you?"));
//
//   if (age > 21) {
//     $('#drinks').show();
//   } else if (age === 21) {
//     alert("Now don't go crazy!");
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });

// front end
$(document).ready(function() {
  $("form#mtg_test").submit(function(event) {
    event.preventDefault();
    var resolution = parseInt($("#conflict_resolution").val());
    var weapon = parseInt($("input:radio[name=weapon]:checked").val());
    var society = parseInt($("#society_preference").val());
    var companion = parseInt($("#companionship").val());
    var identity = parseInt($("#ideology").val());
    var results = resolution + weapon + society + companion + identity;
    $(".result").text(results);
  });
});
