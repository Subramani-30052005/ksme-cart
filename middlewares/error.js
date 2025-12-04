module.exports =(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if(process.env.NODE_ENV == 'development'){
      res.status(err.statusCode).json({
        success:false,
        message: err.message,
        stack : err.stack,
        error:err
    })
}

//production
    if(process.env.NODE_ENV=='production'){
        let message = err.message;
        let error = new Error(message);
    }
    if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({
            success: false,
            message: errors
        });
    }

    // CastError (Invalid ID)
    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: `Invalid ${err.path}`
        });
    }

    // Default error
    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};