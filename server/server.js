const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./config/mongoose.config'); // Connect to MongoDB
require('./routes/product.routes')(app); // Product routes

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
