const readFile = require('./api.js');
const path = require('path');

    let filePath = path.join(__dirname,'file.js');

    console.log(readFile);
