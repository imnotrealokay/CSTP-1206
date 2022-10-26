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
    res.status(201).json({
        message: "Yo!!",
        //data: employeeList.department
    })
})

//3
app.get("/employees/:employeeID",(req, res) => {
    res.send("Done!")
})

//4
app.post("/employees", function(req, res){
    const input = res.body;

    employeeList.push(input);

    return res.status(202).json({
        message: "Kidaan!!",
        data: employeeList,
    })
})

//5
// app.put("/employees/:employeeID",(req, res) => {
//     const id = req.params.id;

//     const findID = employeeList.find((employee) => employee.id == id ? true : false);

//     if (findID) {
//         return res.status(200).json({
//             message: "Found it!",
//             data: employeeList
//         })
//     }else{
//         return status(404).json({
//             message: "Not Found"
//         })
//     }


// }


app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/employees/id/:employeeID');
})