function validate(){
  var mailNumber = document.getElementById('mail-number').value;
  var mailRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var mailResult = mailRGEX.test(mailNumber);
  return false;
}
