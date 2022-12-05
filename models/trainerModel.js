var db = require("./config");


var getPersonalDetails = (data,callback)=>{
    var sql = `select * from trainer where name = '${data.name}'`
    db.executeQuery(sql, function(err,result){
        callback(result); 
    })
}
//added
var validateUser = (userName, password, callback) => {
    var sql = "SELECT * FROM trainer WHERE name = ? AND password = ?";
    db.executeQuery(sql, [userName, password], function(result) {
        callback(result[0]);
    });
};

//added
var getUserListDb = (data,callback) => {
    var sql = `SELECT * FROM user  WHERE trainerName = '${data.trainerName}'`;
    db.executeQuery(sql, function(err,result) {
        callback(result);
    });
};

//added
var loadUserHomeDb = (data,callback) => {
    var sql = `SELECT * FROM user WHERE name = '${data.userName}'`;
    db.executeQuery(sql, function(err,result) {
        callback({trainerName:data.trainerName,
            userName:result[0].name});
    });
};

var getMemberDetailsHome = (data,callback)=>{
    var sql = `select name, age, gender, phoneNumber, email, startDate, packageid  from user where name = '${data.name}' `;
    db.executeQuery(sql,function(err,result){
        callback(result);
    })
}

var initialMemberTodo = (data,callback)=>{
    var sql = `select * from todo where name = '${data.name}' and writer = 'trainer'`
    db.executeQuery(sql, function(err,result){
        callback(result);
    })
}


module.exports = {
    validateUser,
    getUserListDb,
    loadUserHomeDb,
    getPersonalDetails,
    getMemberDetailsHome,
    initialMemberTodo
};
