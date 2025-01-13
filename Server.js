require('dotenv').config({ path: './APISP.env' });
const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type']
}));

// Serve MysticalCitizen.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/SpiritProgress.html');
});

// Endpoint to send Firebase API key (Protected)
app.get('/firebase-key', (req, res) => {
    res.json({ 'apiKey': process.env.FIREBASE_API_KEY });
});


// Handle CORS for all other routes
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});
