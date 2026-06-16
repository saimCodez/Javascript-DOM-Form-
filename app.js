// var fullname = document.getElementById("name");
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var confirmPassword = document.getElementById("confirm-password");
// var address = document.getElementById("address");
// var contact = document.getElementById("contact");
// var submitbtn = document.getElementById("submitbtn");

// var check = false;

// fullname.addEventListener("keypress", function (e) {
//   submitbtn.disabled = false;
//   if (e.keyCode != 13) {
//     check = false;
//   }

//   console.log(e.keyCode);
//   if (e.keyCode == 13 && check == false) {
//     check = true;
//     var res = ValidatorFunction(); //true,false
//     if (res == true) {
//       Submit();
//     }
//   }
// });

// email.addEventListener("keypress", function (e) {
//   submitbtn.disabled = false;
//   if (e.keyCode != 13) {
//     check = false;
//   }
//   console.log(e.keyCode);
//   if (e.keyCode == 13 && check == false) {
//     check = true;
//     var res = ValidatorFunction(); //true,false
//     if (res == true) {
//       Submit();
//     }
//   }
// });

// password.addEventListener("keypress", function (e) {
//   console.log(password.value);
//   submitbtn.disabled = false;
//   if (e.keyCode == 13 && check == false) {
//     check = true;
//     var res = ValidatorFunction();
//     if (res == true) {
//       Submit();
//     }
//   }
// });

// confirmPassword.addEventListener("keypress", function (e) {
//   console.log(password.value);
//   submitbtn.disabled = false;
//   if (e.keyCode == 13 && check == false) {
//     check = true;
//     var res = ValidatorFunction();
//     if (res == true) {
//       Submit();
//     }
//   }
// });

// address.addEventListener("keypress", function (e) {
//   console.log(contact.value);
//   submitbtn.disabled = false;
//   if (e.keyCode == 13 && check == false) {
//     check = true;
//     var res = ValidatorFunction();
//     if (res == true) {
//       Submit();
//     }
//   }
// });

// contact.addEventListener("keypress", function (e) {
//   console.log(contact.value);
//   submitbtn.disabled = false;
//   if (e.keyCode == 13 && check == false) {
//     check = true;
//     var res = ValidatorFunction();
//     if (res == true) {
//       Submit();
//     }
//   }
// });

// function ValidatorFunction() {
//   if (fullname.value == "") {
//     ShowToastify("Enter Name");
//     fullname.focus();
//     return false;
//   } else if (email.value == "") {
//     ShowToastify("enter email address ");
//     email.focus();
//     return false;
//   } else if (password.value == "") {
//     password.focus();
//     ShowToastify("enter password");
//     return false;
//   } else if (confirmPassword.value == "") {
//     confirmPassword.focus();
//     ShowToastify("enter confirm password");
//     return false;
//   } else if (confirmPassword.value != password.value) {
//     confirmPassword.focus();
//     ShowToastify("passwords doesn't match");
//     return false;
//   } else if (address.value == "") {
//     address.focus();
//     ShowToastify("enter address");
//     return false;
//   } else if (contact.value == "") {
//     contact.focus();
//     ShowToastify("enter contact no");
//     return false;
//   }
//   return true;
// }

// function ShowToastify(message) {
//   Toastify({
//     text: message,
//     duration: 3000,
//     stopOnFocus: false,
//     gravity: "bottom",
//     position: "right",
//     style: {
//       background: "#000",
//       color: "#fff",
//       border: "2px solid red",
//       borderRadius: "12px",
//       fontFamily: "Arial, sans-serif",
//     },
//   }).showToast();

//   setTimeout(function () {
//     submitbtn.disabled = false;
//     check = false;
//   }, 3000);
// }

// function Submit() {
//   submitbtn.disabled = true;
//   console.log(email.value);
//   var res = ValidatorFunction();
//   if (res == true) {
//     ShowToastify("Form Submitted Succesfully!");
//     fullname.value = "";
//     email.value = "";
//     password.value = "";
//     confirmPassword.value = "";
//     address.value = "";
//     contact.value = "";
//     fullname.focus();
//   }
// }

// var openeye = document.getElementById("openeye");
// var closeeye = document.getElementById("closeeye");

// function SetIcon(tag) {
//   console.log(tag.classList);
//   if (tag.classList[0] == "eye-icon-close") {
//     openeye.style.display = "inline";
//     closeeye.style.display = "none";
//     password.type = "text";
//   } else if (tag.classList[0] == "eye-icon-open") {
//     closeeye.style.display = "inline";
//     openeye.style.display = "none";
//     password.type = "password";
//   }
// }
