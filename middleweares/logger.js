const logger = (req, res, next) => {
    console.log(`New request received: ${req.method} ${req.originalUrl}`);
    console.log('Request body:', req.body);
    console.log('Request query:', req.query);
    console.log('Request params:', req.params);
    console.log('Request headers:', req.headers);
    console.log('Request cookies:', req.cookies);
    console.log('-'.repeat(50));

    // call the next middleware in the stack
    next();
}

module.exports = logger;
