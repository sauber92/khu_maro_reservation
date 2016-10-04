var formDate = document.getElementById("form-date");
var startTime = document.getElementById("form-select-start-time");
var endTime = document.getElementById("form-select-end-time");
var textarea = document.getElementById("form-textarea");
var position = $('#main-page').offset();

window.onload = function() {
    console.log('Start khu-maro-reservation ======>');
    displayMainPage();
}

// window.addEventListener('load', function() {
//     setTimeout(scrollTo, 0, 0, 1);
// }, false);

$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
});

$('#menubar').hover(function() {
    $('#body').removeClass('menubar-hoverable header-fixed');
    $('#body').addClass('menubar-hoverable header-fixed menubar-pin menubar-visible');
}, function() {
    $('#body').removeClass('menubar-hoverable header-fixed menubar-pin menubar-visible');
    $('#body').addClass('menubar-hoverable header-fixed');
});

function hamberBtn() {
    $('#body').removeClass('menubar-hoverable header-fixed');
    $('#body').addClass('menubar-hoverable header-fixed menubar-pin menubar-visible');
}

function displayMainPage() {
    console.log('main-page-btn clicked');
    document.getElementById("main-page").style.visibility = "visible";
    document.getElementById("reserve-page").style.visibility = "hidden";
    document.getElementById("login-page").style.visibility = "hidden";

    $('#body').removeClass('menubar-hoverable header-fixed menubar-pin menubar-visible');
    $('#body').addClass('menubar-hoverable header-fixed');
}

function displayReservePage() {
    console.log('reserve-page-btn clicked');
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("reserve-page").style.visibility = "visible";
    document.getElementById("login-page").style.visibility = "hidden";

    var top = position.top;
    var left = position.left;
    $('#reserve-page').offset({
        top,
        left
    });
    $('#body').removeClass('menubar-hoverable header-fixed menubar-pin menubar-visible');
    $('#body').addClass('menubar-hoverable header-fixed');
}

function displayLoginPage() {
    console.log('login-page-btn clicked');
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("reserve-page").style.visibility = "hidden";
    document.getElementById("login-page").style.visibility = "visible";

    var top = position.top;
    var left = position.left;
    $('#login-page').offset({
        top,
        left
    });
    $('#body').removeClass('menubar-hoverable header-fixed menubar-pin menubar-visible');
    $('#body').addClass('menubar-hoverable header-fixed');
}

function saveReservation() {
    console.log('Reservation btn clicked');
    sendFormData();
}

$('#calendar').fullCalendar({
    header: false,
    height: 400,
    resources: {
        url: '/events',
        type: 'POST'
    },
    events: [{
        title: '정준영이 만듬',
        start: new Date(2016, 09, 2),
        end: new Date(2016, 09, 5),
        allDay: true
    }]
});
