import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import studentRoute from './routes/student.js'
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true ,useUnifiedTopology: true }).
  catch(error => handleError(error));
  
app.use('/students',studentRoute);

const port = 5000 || process.env.port;
app.listen(port,()=>{
    console.log(`Server Started ${port}`);
})
