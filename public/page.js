var date = document.getElementById("form-date");
var startTime = document.getElementById("form-select-start-time");
var endTime = document.getElementById("form-select-end-time");
var textarea = document.getElementById("form-textarea");

window.onload = function() {
  console.log('Start khu-maro-reservation ======>');
  displayMainPage();
}

function displayMainPage() {
    console.log('main-page-btn clicked');
    document.getElementById("main-page").style.visibility = "visible";
    document.getElementById("reserve-page").style.visibility = "hidden";
    document.getElementById("login-page").style.visibility = "hidden";
}

function displayReservePage() {
    console.log('reserve-page-btn clicked');
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("reserve-page").style.visibility = "visible";
    document.getElementById("login-page").style.visibility = "hidden";
}

function displayLoginPage() {
    console.log('login-page-btn clicked');
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("reserve-page").style.visibility = "hidden";
    document.getElementById("login-page").style.visibility = "visible";
}

function saveReservation() {
  console.log('Reservation btn clicked');
  sendFormData();
}

function sendFormData() {
  console.log(date);
  console.log(startTime);
  console.log(endTime);
  console.log(textarea);
}
