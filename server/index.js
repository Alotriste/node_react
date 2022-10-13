const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "sql6.freesqldatabase.com",
  database: "sql6525882",
  user: "sql6525882",
  password: "3GEJNpvAU3",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM test_task_bd";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res)=>{
    const{tel, name, data} =  req.body;
    const sqlInsert = "INSERT INTO test_task_bd (tel, name, data) VALUES (?, ?, ?)";
    db.query(sqlInsert, [tel, name, data], (error, result)=>{
        if(error){
            console.log(error);
        }
    })
})

app.get("/", (req, res) => {
  //   const sqlInsert =
  //     "INSERT INTO test_task_bd (tel, name, data) VALUES (89338271923, 'Altair', '1992-05-03')";
  //   db.query(sqlInsert, (err, result) => {
  //     console.log("error", err);
  //     console.log("result", result);
  //   });
  //   res.send("Hello Express");

});

app.listen(5000, () => {
  console.log("Nice server");
});
