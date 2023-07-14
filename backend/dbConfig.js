const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cafeDB')
.then(() => console.log('Connected!'));
