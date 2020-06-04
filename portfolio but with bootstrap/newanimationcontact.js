function validateForm() {
  var x = document.forms.name.value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var y = document.forms.Email.value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  var z = document.forms.Subject.value;
  if (z == "") {
    alert("Subject must be filled out");
    return false;
  }
}



// Wrap every letter in a span
