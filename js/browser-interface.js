var date = require("./../js/scripts.js");

$(function() {
  $("#btn-test").click(function () {
  //  $.get('https://api.github.com/users/' + userLogin, function(response) {
    $.get('./../user-response.json', function (response) {
      $(".body").show();
      $('#avatar').attr('src', response.avatar_url);
      $('#user-name').text(response.name);
      $('#user-login').text(response.login);
      $('#user-email').text(response.email);
      $('#user-blog').text(response.blog);
      $('#user-location').text(response.location);
      $('#joined-date').text(date.formatDate(response.created_at));
      $('#followers').text(response.followers);
      $('#starred').text(response.public_gists);
      $('#following').text(response.following);
      $('#repo-list').append("")
    });
  });
});
