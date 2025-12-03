const app = require('./app');
const dotenv= require('dotenv');
const { connect } = require('http2');
const path= require('path');
const connectDatabase =require('./config/database');
// const { notFound, errorHandler } = require('./utils/errorHandler');


dotenv.config({path:path.join(__dirname,"config/config.env")});

connectDatabase();

// app.use(notFound);
// app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`server listening to the port:${process.env.PORT} in ${process.env.NODE_ENV}`)
})

 