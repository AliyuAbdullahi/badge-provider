// module.exports = require('./env/' + process.env.NODE_ENV + '.js');
module.exports = (function () {
    return {
        db: {
            development: {
                uri: 'mongodb://localhost/badge-provider',
                options: {
                    user: '',
                    pass: ''
                }
            },

            test: {
                uri: 'mongodb://localhost:27017/badge-provider',
                options: {
                    user: '',
                    pass: ''
                }
            },
            production: {
                uri: 'mongodb://badge-provider:allahumasedika12@ds045757.mongolab.com:45757/badge-provider',
                options: {
                    user: '',
                    pass: ''
                }
            }
        },
        port: process.env.PORT || 5555
    };
})();
