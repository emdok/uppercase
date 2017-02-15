$(document).ready(function() {
  alert('beginning');
  $("#blanks form").submit(function(event) {
    var allcapsInput = $("input#allcaps").val();
    var output = allcapsInput.toUpperCase();
    alert(output);

    event.preventDefault();
  });
});
