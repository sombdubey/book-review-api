require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/signup', require('./routes/authRoutes'));
app.use('/login', require('./routes/authRoutes'));
app.use('/books', require('./routes/bookRoutes'));
app.use('/', require('./routes/reviewRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
