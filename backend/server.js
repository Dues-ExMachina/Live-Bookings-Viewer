const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');


//  Initialize Express app and create an HTTP server
const app = express();
app.use(cors()); // Use cors middleware

const server = http.createServer(app);

//  Configure Socket.IO with CORS settings
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST"]
    }
});


// Use an in-memory array as the database
const bookings = [];


//Create a "mock" function to simulate new bookings
const venueNames = ["The Grand Hall", "The Garden Pavilion", "The Oceanview Room", "The Skyline Lounge"];
const partySizes = [2, 4, 6, 8, 10];



setInterval(() => {
    // Generate a random booking object
    const newBooking = {
        venueName: venueNames[Math.floor(Math.random() * venueNames.length)],
        partySize: partySizes[Math.floor(Math.random() * partySizes.length)],
        time: new Date().toLocaleTimeString()
    };


    // Add the new booking to the start of the array
    bookings.unshift(newBooking);

    // Broadcast the new booking to all connected clients
    io.emit('new-booking', newBooking);
    console.log('New booking generated:', newBooking);
}, 5000);



// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Send the current list of bookings to the new client
    socket.emit('initial-bookings', bookings);

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});


//Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});