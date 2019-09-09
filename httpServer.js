
const express = require('express');
const fs = require('fs');
const app = express();


app.use((req, res, next)=>{
     let ip = null;

    if (req.headers['x-forwarded-for']) {
        ip = req.headers['x-forwarded-for'].split(",")[0];
    }
    else if (req.connection && req.connection.remoteAddress) {
        ip = req.connection.remoteAddress;
    }
    else {
        ip = req.ip;
    }


    let ipLog = [];
    if (ipLog.length==0) {
        ipLog.push(ip);
       fs.appendFile("server.log", ip + "\n", err => {
                if (err) throw err;
                });
      }
    for (let i=0; i<ipLog.length; i++) {

        if (ipLog[i]!=ip) {
            ipLog.push(ip);

            fs.appendFile("server.log", ip + "\n", err => {
                if (err) throw err;
                });
    }
}
    console.log(ipLog);
    next();
});


app.get('/', (req, res)=>{
    console.log("Route /");
    res.send("Hello Express");

});

app.listen(3000);
