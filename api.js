    const fs = require('fs');
    const path = require('path');

//let filePath = path.join(__dirname,'file.js');

 exports.promiseReadfile = function (filePath) {
    return new Promise((res, rej) => {       
       fs.readFile(filePath, 'utf8', function(err, contents) {
              res(contents);
               rej(err);
            });
         })
    }

 
    