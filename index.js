var express = require("express");
const engine = require('consolidate');
const fs = require('fs');
const bodyParser = require("body-parser");
const port = 800;
const io = require('socket.io')(8000,{
  cors: {
      origin: '*',
  }
});
const memberModel = require('./models/memberModel');

const users = {};
var topic_socketid = {}

io.on('connection',socket=>{
  //chat sockets
  socket.on('new-user-joined',(name,titleId)=>{
      memberModel.chat_new_user_joined(titleId,(result)=>{socket.emit('load',result);},()=>{
        console.log(name,titleId)
        users[socket.id] = name;
        if(topic_socketid[titleId]==undefined){
            let temp = new Array()
            temp.push(socket.id);
            topic_socketid[titleId]=temp 
        }
        else{
            topic_socketid[titleId].forEach(element=>{socket.broadcast.to(element).emit('user-joined',name)})
            topic_socketid[titleId].push(socket.id);
        }
      })
    socket.on('send', (message,topicId)=>{
        topic_socketid[topicId].forEach(element => {socket.broadcast.to(element).emit('receive',{message: message, name: users[socket.id]});});
        memberModel.chat_update(topicId,users,socket.id,message)
      })
      
  });

  //todo sockets
  socket.on('addTask',(name,task,writer)=>{
      memberModel.addTaskTodo(name,task,'incomplete',writer);
  })

  socket.on('flipState',(name,task)=>{
    memberModel.flipStateTodo(name,task);
  })

  socket.on('removeTask',(name,task)=>{
    memberModel.removeTaskTodo(name,task);
})
})

var memberRouter = require("./routes/member.routes.js");
var trainerRouter = require("./routes/trainer.routes.js");
var adminRouter = require("./routes/admin.routes.js");


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing
app.use("/member", memberRouter);
app.use("/trainer", trainerRouter);
app.use("/admin", adminRouter);
app.use('/static',express.static('static'));
app.use(express.urlencoded());


app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'ejs');

//landing page
app.get('/',(req,res)=>{

    res.render('landing')
});

app.use(function (req, res, err) {
  res.status(err.status || 404).json({
    message: "No Such Route Exists",
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message",
  });
  console.log(err);
});

const serv = app.listen(port,()=>{
  console.log("App started and listening");
});
module.exports = serv;
