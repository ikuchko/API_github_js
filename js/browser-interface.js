var github = require("./../js/scripts.js")
$(function() {
  $("#btn-test").click(function () {
    console.log(github.getUser("ikuchko"));
  });
});
