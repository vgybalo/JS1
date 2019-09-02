    const fs = require('fs');
    const path = require('path');

 function promiseReadfile (filePath) {
    return new Promise((res, rej) => {       
       fs.readFile(filePath, 'utf8', function(err, contents) {
              res(contents);
               rej(err);
            });
     
        })
 
    }

    let filePath = path.join(__dirname,'file.js');

    
    let LibPromiseReadFile = promiseReadfile (filePath)
            .then ( contents => console.log(contents))
            .catch (err => console.error(err))

module.exports = LibPromiseReadFile;
    
    promiseReadfile (filePath);
    console.log(filePath);
    

    