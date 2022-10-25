const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 5000;
//const cors = require("cors");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(cors());


///1
app.get("/employees", (req, res) => {
    res.send("Working!!")
})
// app.listen(port, () => {
//     console.log('Listening at http://localhost:' + port);
// })


//2
app.get("/employees/:department",(req, res) => {
    res.send("Working too!!")
})

//3
app.get("/employees/id/:employeeID",(req, res) => {
    res.send("Working buddy")
})
//4
app.post("/employees", urlencoded, function(req, res){
    res.render("/employees", {q: req, res})
})


app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/employees/id/:employeeID');
})