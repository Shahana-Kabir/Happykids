const express = require('express');
const app = express();
const profileRoutes = require('./routes/profile');


const PORT = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/profiles', profileRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));