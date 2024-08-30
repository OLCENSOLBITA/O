document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var selectedDateEl = document.getElementById('selected-date');
    var availableTimeEl = document.getElementById('available-time');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: '',
            center: '',
            right: ''
        },
        events: [
            {
                title: 'Available',
                start: '2024-04-21T15:00:00',
                end: '2024-04-21T16:00:00'
            }
        ],
        dateClick: function(info) {
            var date = new Date(info.dateStr);
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = date.toLocaleDateString('en-US', options);
            selectedDateEl.textContent = formattedDate;
            availableTimeEl.textContent = '3:00 - 4:00 PM'; // You can make this dynamic based on the selected date.
        }
    });

    calendar.render();
});

function selectTherapist(therapistName) {
    document.querySelector('.dropbtn').textContent = therapistName + ' ';
    document.querySelector('.dropbtn').innerHTML += '&#x25BC;';
}
