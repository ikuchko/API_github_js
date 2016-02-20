var moment = require("moment");

exports.formatDate = function (dateCreated) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "july", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var date = new Date(dateCreated);
  return ("Joined on " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getYear());
}

exports.formatUpdated = function (dateUpdated) {
  return moment(dateUpdated).fromNow();
}

exports.sortByName = function (array) {
  return array.sort(function(a, b){
    var dateA=new Date(a.updated_at), dateB=new Date(b.updated_at);
    return dateB-dateA; //sort by date decending
  });
}
