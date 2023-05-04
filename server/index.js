const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./api/index.js');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const conn_str = 'mongodb+srv://attendence:attendence@attendence.b4p0rmy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(
    conn_str,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, (err) => {
        if (err) {
            console.log("error in connection");
        }else{
            console.log('mongodb is connected');
        }
    }
)

app.use(cors());
app.use(express.json())
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})



