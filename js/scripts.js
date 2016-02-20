var moment = require("moment");

exports.formatDate = function (dateCreated) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "july", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var date = new Date(dateCreated);
  return ("Joined on " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getYear());
}

exports.formatUpdated = function (dateUpdated) {
  return moment(dateUpdated).fromNow();
}
