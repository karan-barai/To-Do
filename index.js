import express from "express";

const app = express();
const port = process.env.PORT || 3000;
let alltodo ={all:[],work:[]}
// var worktodo = [];

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();
let day = today.toLocaleDateString("en-US", options);

// middleware
app.use(express.urlencoded({ exteded: true }));
app.use(express.static("Public"));

app.set('view engine', 'ejs');

// routes
  

app.get("/", (req, res) => {
  res.render("index", {currDay : day, todo: alltodo.all});
});

app.get("/work", (req, res) => {
    res.render("work", {wTodo: alltodo.work});
});

app.post("/", (req, res) => {
  let todos = req.body["todo"];
  alltodo.all.push(todos);
  res.redirect("/");
});

app.post("/work", (req, res) => {
  let wtodos = req.body["workTodo"];
  alltodo.work.push(wtodos);
  res.redirect("/work");
});

// server configuration..
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
  