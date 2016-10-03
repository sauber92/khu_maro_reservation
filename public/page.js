var formDate = document.getElementById("form-date");
var startTime = document.getElementById("form-select-start-time");
var endTime = document.getElementById("form-select-end-time");
var textarea = document.getElementById("form-textarea");
var position = $('#main-page').offset();

window.onload = function() {
    console.log('Start khu-maro-reservation ======>');
    displayMainPage();
}

$('html, body').css({'overflow': 'hidden', 'height': '100%'});

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

    var top = position.top;
    var left = position.left;
    $('#reserve-page').offset({top, left});
    $('#body').attr('menubar-hoverable header-fixed menubar-pin menubar-visible', 'menubar-hoverable header-fixed menubar-pin');
}

function displayLoginPage() {
    console.log('login-page-btn clicked');
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("reserve-page").style.visibility = "hidden";
    document.getElementById("login-page").style.visibility = "visible";

    var top = position.top;
    var left = position.left;
    $('#login-page').offset({top, left});
    $('#body').attr('menubar-hoverable header-fixed menubar-pin menubar-visible', 'menubar-hoverable header-fixed menubar-pin');
}

function saveReservation() {
    console.log('Reservation btn clicked');
    sendFormData();
}

function sendFormData() {
    console.log(formDate);
    console.log(startTime);
    console.log(endTime);
    console.log(textarea);
}

$('#calendar').fullCalendar({
    header: false,
    height: 450,
    resources: {
        url: '/events',
        type: 'POST'
    }
});
