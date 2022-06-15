const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const methodoverride = require('method-override');
require('dotenv').config();
const uri = process.env.DATABASE_URL;


const app = express();

//--------------Database connection---------------//
mongoose
  .connect(uri)
  .then((result) => console.log("Database connected....!"))
  .catch((err) => console.log(err));
//--------------Database connection end---------------//


app.set('view engine', 'ejs')
app.set('views','views')

const adminData = require('./routes/admin')


app.use(express.json())
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use(methodoverride('_method'));
app.use(cors());



app.use('/admin',adminData)


app.use((req,res,next) => {
    res.status(404).render('404')
})

app.listen(process.env.PORT || 6001,console.log('Server is Running....!!!!'));

// WyjiIg8gHtn1aFbr