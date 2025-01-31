const express = require("express");
const app = express();

app.get("/api/auth", (req, res) =>{

    res.status(200).send("Welcome to world best mern series by thapa technical");

});

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`server id running at port: ${PORT}`);
});