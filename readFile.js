const readFile  = require('./api.js');
const path = require('path');

let filePath = path.join(__dirname,'file.js');

     readFile.promiseReadfile (filePath)
            .then ( contents => console.log(contents))
            .catch (err => console.error(err))

