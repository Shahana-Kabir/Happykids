const express = require('express');
const app = express();
const profileRoutes = require('./routes/profile');
const jobsRoutes = require('./routes/jobs');
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: 4
}));

const PORT = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');

app.use(express.static('public'))
app.use(express.json());
app.use(cors());

app.use('/profiles', profileRoutes);
app.use('/jobs', jobsRoutes);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));