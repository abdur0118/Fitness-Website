var db = require("./config");


var validateUser = (userName, password, callback) => {
    var sql = "SELECT * FROM admin WHERE name = ? AND password = ?";
    db.executeQuery(sql, [userName, password], function (result) {
        callback(result[0]);
    });
};

var getList = (callback) => {
    var sql = "select * FROM admin";
    db.executeQuery(sql, function (err, result) {
        callback(result);
    });
};

var getUserList = (callback) => {
    var sql = "select * FROM user";
    db.executeQuery(sql, function (err, result) {
        callback(result);
    });
};

var getTrainerList = (callback) => {
    var sql = "select * FROM trainer";
    db.executeQuery(sql, function (err, result) {
        callback(result);
    });
};

var getPackageList = (callback) => {
    var sql = "select * FROM package";
    db.executeQuery(sql, function (err, result) {
        callback(result);
    });
};

var addAdmin = (data, callback) => {
    var sql = `insert into admin values('${data.name}','${data.password}','${data.phoneNumber}','${data.email}')`;
    db.executeQuery(sql, function (err) {
        if (err) console.log(err);
        callback();
    });
};

var removeAdmin = (data, success, fail) => {
    var sql = `select * from admin where name = '${data.verifyName}' and password = '${data.verifyPassword}'`;
    db.executeQuery(sql, function (err, result) {
        if (!err && result.length > 0) {
            sql = `delete from admin where name = '${data.name}'`;
            db.executeQuery(sql, function (err) {
                if (err) console.log(err);
                success();
            });
        } else {
            fail();
        }
    });
};

var addTrainer = (data, callback) => {
    var sql = `insert into trainer(name,password,age,gender,salary,phoneNumber,email) values('${data.name}','${data.password}','${data.age}','${data.gender}','${data.salary}','${data.phoneNumber}','${data.email}')`;
    db.executeQuery(sql, function (err) {
        if (err) console.log(err);
        callback();
    });
};

var removeTrainer = (data, success,fail) => {

    var sql = `select * from admin where name = '${data.verifyName}' and password = '${data.verifyPassword}'`;
    db.executeQuery(sql, function (err, result) {
        if (!err && result.length > 0) {
            sql = `delete from trainer where name = '${data.name}'`;
            db.executeQuery(sql, function (err) {
                if (err) console.log(err);
                success();
            });
        } else {
            fail();
        }
    });



};

var addPackage = (data, callback) => {
    var sql = `insert into package values('${data.id}',${data.duration},${data.amount},'${data.description}')`;
    db.executeQuery(sql, function (err) {
        if (err) console.log(err);
        callback();
    });
};

var removePackage = (data, success,fail) => {
    var sql = `select * from admin where name = '${data.verifyName}' and password = '${data.verifyPassword}'`;
    db.executeQuery(sql, function (err, result) {
        if (!err && result.length > 0) {   
            sql = `delete from package where id = '${data.id}'`;
    db.executeQuery(sql, function (err) {
        if (err) console.log(err);
        success();
    });
        } else {
            fail();
        }
    });

};

var addMember = (data, callback) => {
    var sql = `insert into user values('${data.name}','${data.password}',${data.age},'${data.gender}','${data.phoneNumber}','${data.email}','${data.startDate}','${data.feeStatus}',${data.balance},'${data.packageid}','${data.trainerName}')`;
    db.executeQuery(sql, function (err) {
        if (err) console.log(err);
        callback();
    });
};

var removeMember = (data, success, fail) => {
    var sql = `select * from admin where name = '${data.verifyName}' and password = '${data.verifyPassword}'`;
    db.executeQuery(sql, function (err, result) {
        if (!err && result.length > 0) {
            sql = `delete from user where name = '${data.name}'`;
            db.executeQuery(sql, function (err) {
                if (err) console.log(err);
                success();
            });
        } else {
            fail();
        }
    });
};

var editAdmin = (data, callback) => {
    var sql = `update admin
                set password = '${data.password}',phoneNumber = '${data.phoneNumber}',email = '${data.email}'
                where name = '${data.name}'`;
    db.executeQuery(sql, function (err) {
        console.log(err);
        callback();
    });
};

var editMember = (data, callback) => {
    var sql = `update user
                set password='${data.password}', age = ${data.age},phoneNumber = '${data.phoneNumber}',email = '${data.email}',startDate = '${data.startDate} 05:30:00',feeStatus = '${data.feeStatus}',balance = ${data.balance},packageid = '${data.packageid}',trainerName = '${data.trainerName}'
                where name = '${data.name}'`;
    db.executeQuery(sql, function (err) {
        console.log(err);
        callback();
    });
};

var editAdminDetailsSend = (data,callback)=>{
    var sql = `select * from admin where name = '${data.name}'`
    db.executeQuery(sql,function(err,result){
        callback(result);
    })
}

var editMemberDetailsSend = (data,callback)=>{
    var sql = `select name, password, age, phoneNumber, email, startDate, feeStatus, balance, packageid, trainerName from user where name = '${data.name}'`
    db.executeQuery(sql,function(err,result){
        callback(result);
    })
}

var editTrainerDetailsSend = (data,callback)=>{
    var sql = `select name, password, age, salary, phoneNumber, email from trainer where name = '${data.name}'`
    db.executeQuery(sql,function(err,result){
        callback(result);
    })
}

var editPackageDetailsSend = (data,callback)=>{
    var sql = `select * from package where id = '${data.id}'`
    db.executeQuery(sql,function(err,result){
        callback(result);
    })
}


var editTrainer = (data, callback) => {
    var sql = `update trainer
                set password='${data.password}', age = ${data.age},salary = ${data.salary}, phoneNumber = '${data.phoneNumber}',email = '${data.email}'
                where name = '${data.name}'`;
    db.executeQuery(sql, function (err) {
        console.log(err);
        callback();
    });
};

var editPackage = (data, callback) => {
    var sql = `update package
                set duration = ${data.duration},amount = ${data.amount},description = '${data.description}'
                where id = '${data.id}'`;
    db.executeQuery(sql, function (err) {
        console.log(err);
        callback();
    });
};

var getdueUserList = (callback) => {
    var sql = `select * FROM user where feeStatus = 'pending'`;
    db.executeQuery(sql, function (err, result) {
        callback(result);
    });
};

var notifyMember = (callback) => {
    var sql = `select name from user where feeStatus = 'pending'`;
    db.executeQuery(sql, function (err, result) {
        for (let i = 0; i < result.length; i++) {
            sql = `insert into todo values ('${result[i].name}','DUE FEE!!(ADMIN)','incomplete','admin')`;
            db.executeQuery(sql, function (err) {
                console.log(err);
            });
        }
    });
    callback();
};

module.exports = {
    validateUser,
    getList,
    getUserList,
    getTrainerList,
    getPackageList,
    addAdmin,
    removeAdmin,
    addTrainer,
    removeTrainer,
    addPackage,
    removePackage,
    addMember,
    removeMember,
    editAdmin,
    editMember,
    editTrainer,
    editPackage,
    getdueUserList,
    notifyMember,
    editAdminDetailsSend,
    editMemberDetailsSend,
    editTrainerDetailsSend,
    editPackageDetailsSend
};
