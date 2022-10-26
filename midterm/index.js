const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 5000;
//const cors = require("cors");

let employeeList = [
    {
        id: 1,
        name: "Mike",
        email: "mike@company.com",
        employeeID: 100,
        department: "IT",
        salary: 100000
    },
    {
        id: 2,
        name: "Daniel",
        email: "daniel@company.com",
        employeeID: 101,
        department: "HR",
        salary: 50000
    }
]

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",(req, res) =>{
    res.redirect("/employees");
})
//app.use(cors());


///1
app.get("/employees", (req, res) => {
    return res.status(200).json({
        message: "succesfull",
        data: employeeList
    })
})
// app.listen(port, () => {
//     console.log('Listening at http://localhost:' + port);
// })


//2
app.get("/employees/id/:department",(req, res) => {
    res.send("Working too!!")
})

//3
app.get("/employees/:employeeID",(req, res) => {
    res.send(200)("Done!")
})

//4
// app.post("/employees", urlencoded, function(req, res){
//     res.render("/employees", {q: req, res})
// })


app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/employees/id/:employeeID');
})