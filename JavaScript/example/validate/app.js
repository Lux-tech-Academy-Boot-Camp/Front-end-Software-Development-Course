function validate(){
<<<<<<< HEAD
  var mailNumber = document.getElementById('mail-number').value;
  var mailRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var mailResult = mailRGEX.test(mailNumber);
=======
  var phoneNumber = document.getElementById('phone-number').value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
    

>>>>>>> b0a63e59980bd890b23e3f71accfbd9a1ac523a1
  return false;
}
