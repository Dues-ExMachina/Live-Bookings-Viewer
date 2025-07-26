document.addEventListener('DOMContentLoaded', () => {
    // Connect to the backend Socket.IO server
    const socket = io('http://localhost:3000');
    const bookingsList = document.getElementById('bookings-list');

    // Function to create and display a booking element
    function addBookingToList(booking, prepend = false) {
        const bookingDiv = document.createElement('div');
        bookingDiv.classList.add('booking');

        // Create the inner HTML for the booking details
        const bookingDetails = `
      <h3>${booking.venueName}</h3>
      <p><strong>Party Size:</strong> ${booking.partySize}</p>
      <p><strong>Time:</strong> ${booking.time}</p>
    `;

        bookingDiv.innerHTML = bookingDetails;

        // Add the new booking to the top (prepend) or bottom (append) of the list
        if (prepend) {
            bookingsList.prepend(bookingDiv);
        } else {
            bookingsList.appendChild(bookingDiv);
        }
    }

    //  Listen for 'initial-bookings' to load existing data
    socket.on('initial-bookings', (bookings) => {
        bookingsList.innerHTML = '';
        bookings.forEach(booking => {
            addBookingToList(booking); // Add to the bottom
        });
    });

    //  Listen for the 'new-booking' event
    socket.on('new-booking', (booking) => {
        // Add the new booking to the top of the list
        addBookingToList(booking, true);
    });
});