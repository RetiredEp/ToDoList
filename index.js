import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;
const db = new pg.Client({
    user:"your username",
    password:"your password",
    host:"localhost",
    database:"your database name",
    port:5432
});
db.connect();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let tasks=[];
app.get("/",async (req,res)=>{
    tasks = await db.query("SELECT * FROM tasks ORDER BY id");
    console.log(tasks);
    res.render("index.ejs",{
        task : tasks.rows
    });
});

app.post('/add',(req,res)=>{
    let newtask = req.body.task;
    console.log(newtask);
    if(newtask){
        db.query("INSERT INTO tasks (task) VALUES ($1)",[newtask]);
        res.redirect('/');
    }else if(err){
        console.log(err);
    }
});

app.post("/delete",async(req,res)=>{
    let taskid = req.body.value;
    console.log(taskid);
    if(taskid){
        db.query("DELETE FROM tasks WHERE id = $1",[taskid]);
        res.redirect('/');
    }else if(err){
        console.log(err);
    }
});

app.listen(port,()=>{
    console.log(`server running on ${port}`);
});