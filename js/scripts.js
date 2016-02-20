exports.formatDate = function (dateCreated) {
  var monthes = ["Jan", "Feb", "Mar", "Apr", "May", "June", "july", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var date = new Date(dateCreated);
  return ("Joined on " + monthes[date.getMonth()] + " " + date.getDate() + ", " + date.getYear());
}
