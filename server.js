require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Controllers
app.use('/api', require('./routes/api'));

// Initialize React App
// app.get('*', function(req, res, next) {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
