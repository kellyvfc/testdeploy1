function generateSerialNumber() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var serialNumber = '';

  for (var i = 0; i < 10; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    serialNumber += chars[randomIndex];
  }

  return serialNumber;
}

function formateDate(date) {
  // debugger
var originalDate = date;
var year = originalDate.substring(0, 4);
var month = originalDate.substring(4, 6);
var day = originalDate.substring(6, 8);
var formattedDate = day + "-" + month + "-" + year;

return formattedDate;
}

