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
      $.get("./../repos-response.json", function (resp) {
        for (var i=0; i<resp.length; i++) {
          $('#repo-list').append("<div>")
                         .append("<p><strong>" + resp[i].name + "</strong></p>")
                         .append("<p>" + resp[i].description + "</p>")
                         .append("<p>" + date.formatUpdated(resp[i].updated_at) + "</p>")
                         .append("</div>");

        }
      });
    });
  });
});
