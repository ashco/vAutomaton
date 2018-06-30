require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Controllers
app.use('/api', require('./routes/api'));

app.use(bodyParser.json());

// Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
// Set static folder
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
