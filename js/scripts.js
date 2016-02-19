exports.getUser = function (userLogin) {
  // $.get('https://api.github.com/users/' + userLogin, function(response) {
  //     return response;
  //   });
  $.get('./../user-response.json', function (response) {
    return response;
  });
}
