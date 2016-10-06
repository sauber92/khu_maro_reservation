var user_name = $('.kakao-name').val();
var start_date = $('#autocomplete1').val();
var start_time = $('#test').val();
var end_date = $('#endDate').val();
var end_time = $('#test2').val();

var position = $('#main-page').offset();

var arrEvent = {
  title: $('.kakao-name').val(),
  start: $('#autocomplete1').val(),
  end: $('#endDate').val(),
  allDay: true
};

window.onload = function() {
    console.log('Start khu-maro-reservation ======>');
    displayMainPage();
}

window.addEventListener('load', function() {
    setTimeout(scrollTo, 0, 0, 1);
}, false);

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
    console.log(user_name);
    console.log(start_date);
    console.log(start_time);
    console.log(end_date);
    console.log(end_time);

    $('#calendar').fullCalendar('addEvent', arrEvent);
}

$('#calendar').fullCalendar({
    header: false,
    height: "auto",
    contentHeight: "auto",
    resources: {
        url: '/events',
        type: 'POST'
    },
    selectable: true,

    select: function(start, end, allDay) {
      var title = prompt('입력하세요:');
      if (title) {
        calendar.fullCalendar('renderEvent',
          {
            title: title,
            start: start,
            end: end,
            allDay: allDay
          },
          true // make the event "stick"
        );
      }
      calendar.fullCalendar('unselect');
    },
    events: [
      {
        title: '정준영이 만듬',
        start: '2016-10-02',
        end:'2016-10-07',
        allDay: true
      },
    ]
});
