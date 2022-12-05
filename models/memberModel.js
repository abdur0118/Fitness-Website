var db = require('./config');

var getPersonalDetails = (data,callback)=>{
    var sql = `select * from user where name = '${data.name}'`
    db.executeQuery(sql, function(err,result){
        callback(result); 
    })
}

var add = ()=>{
    var sql = `select * from user`;
    db.executeQuery(sql,function(err,result){
        console.log(result);
    })
}
var validateUser = (userName, password, callback) => {
    var sql = "SELECT * FROM user WHERE name = ? AND password = ?";
    db.executeQuery(sql, [userName, password], function(result) {
        callback(result[0]);
    });
};

var getTrainerList = (callback) => {
    var sql = "select * FROM trainer";
    db.executeQuery(sql,function(err,result) {
        callback(result);
    });
};

var getPackageList = (callback) => {
    var sql = "select * FROM package";
    db.executeQuery(sql,function(err,result) {
        callback(result);
    });
}; 

var insertDiscTopics = (list,url, callback)=>{
    for(let i = 0;i<list.length;i++){
    var sql = `insert into disctopics(title, url)
                values('${list[i]}','${url[i]}')`;
    db.executeQuery(sql,function(err){
        if(err)
        console.log(err);
    })
}
callback();
}

var getTopicsList = (callback)=>{
    var sql = `select * from disctopics`
    db.executeQuery(sql,function(err,result){
        if(err)
        callback(result);
        else
        callback(result);
    });
}


var chat_new_user_joined = (id, load,callback)=>{
      db.executeQuery(`SELECT * FROM disc${id}`, function (err, result, fields) {
          if (err) {
              db.executeQuery(`create table disc${id}(userName varchar(255), message text)`,function(err){
                 console.log(err);
              })
          }
         else{load(result)}
        });
        callback();
}

var chat_update = (topicId,users,socket_id,message)=>{
    db.executeQuery(`insert into disc${topicId} values('${users[socket_id]}','${message.replace(/[^a-z0-9]/gi, "\\$&")}')`, function (err, result) {
        if (err) throw err;
        //else console.log("inserted");
      });
}

var getTopicName = (id,callback)=>{
    db.executeQuery(`select * from disctopics where id = ${id}`,function(err,result){
        callback(result[0].title);
    })
}
var addTaskTodo = (name,task,state,writer)=>{
    var sql = `insert into todo values('${name}','${task}','${state}','${writer}')`;
    db.executeQuery(sql,function(err){
        if(err){
            console.log(err);
        }
    })
}

var flipStateTodo = (name,task)=>{
    db.executeQuery(`select state from todo where name = '${name}' and task = '${task}'`,function(err,result){
        if(err) throw err
        else{
        if(result[0]['state']=='incomplete'){
            db.executeQuery(`update todo set state = 'complete' where name = '${name}' and task = '${task}'`,function(err){
                console.log(err);
            })
        }

        else{
            db.executeQuery(`update todo set state = 'incomplete' where name = '${name}' and task = '${task}'`,function(err){
                console.log(err);
            })
        }
    }
    })
}

var initialTodoList = (name,callback)=>{
    var sql = `select * from todo where name = '${name}'`;
    db.executeQuery(sql,function(err,result){
        callback(result);
    })
}

var removeTaskTodo=(name,task)=>{
    var sql = `delete from todo where name = '${name}' and task = '${task}' order by name desc limit 1`;
    db.executeQuery(sql,function(err){
        console.log(err);
    })
}

var getWeightList = (name , callback)=>{
    var sql = `select x,y from weights where name = '${name}'`
    db.executeQuery(sql, function(err,result){
        callback(result);
    })
}

var addWeightDb = (data)=>{
    var sql = `insert into weights values('${data.name}','${data.x} 05:30:00',${data.y}) on duplicate key update y = ${data.y}`
    db.executeQuery(sql,function(err){
        if(err)
    console.log(err);
    })
}


var addCalorieDb = (data)=>{
    var sql = `insert into calories values('${data.name}','${data.x} 05:30:00',${data.goal},${data.done}) on duplicate key update goal = ${data.goal}, done = ${data.done}`
    db.executeQuery(sql,function(err){
        if(err)
    console.log(err);
    })
}

var getCalorieList = (name , callback)=>{
    var sql = `select x,goal,done from calories where name = '${name}'`
    db.executeQuery(sql, function(err,result){
        callback(result);
    })
}

var addStepDb = (data)=>{
    var sql = `insert into steps values('${data.name}','${data.x} 05:30:00',${data.goal},${data.done})  on duplicate key update goal = ${data.goal}, done = ${data.done}`
    db.executeQuery(sql,function(err){
        if(err)
    console.log(err);
    })
}

var getStepList = (name , callback)=>{
    var sql = `select x,goal,done from steps where name = '${name}'`
    db.executeQuery(sql, function(err,result){
        callback(result);
    })
}

module.exports={
    add,
    getPersonalDetails,
    validateUser,
    getTrainerList,
    getPackageList,
    insertDiscTopics,
    getTopicsList,
    getTopicName,
    chat_new_user_joined,
    chat_update,
    addTaskTodo,
    flipStateTodo,
    initialTodoList,
    removeTaskTodo,
    getWeightList,
    addWeightDb,
    addCalorieDb,
    getCalorieList,
    addStepDb,
    getStepList
}