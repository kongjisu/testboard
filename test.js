const express = require('express');
const app = express()
const port = 3001;

    app.get("/login", (req, res) => { // 데이터 받아서 결과 전송
        return res.send('/hi');
      
    });
 
    app.listen(port, ()=>{
    console.log(`running on port ${port}`);
    });



