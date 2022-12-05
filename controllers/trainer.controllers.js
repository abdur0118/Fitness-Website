var trainerModel = require('../models/trainerModel');

const getProfile = async (req, res) => {
  trainerModel.getPersonalDetails(req.headers, (result)=>{
    res.status(200).json(result)
  })
};
  const loadUserListPage = async(req,res)=>{
    trainerModel.validateUser(req.body.name, req.body.password, function(result){
      if(!result){
        res.send("INvalid");
      }
      else{
        res.status(200).render('trainer/userList',req.body);
      }
  });
}
  
const getUserList = async(req,res)=>{
  trainerModel.getUserListDb(req.body,function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

const loadUserHome = async(req,res)=>{
  trainerModel.loadUserHomeDb(req.body,function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).render('trainer/user-home',result);
    }
});
}

const loadTodo = async(req,res)=>{
  res.status(200).render('trainer/member-todo',req.body);
}

const toHome = async(req,res)=>{
  res.render('trainer/userList',req.body);
}

const getMemberDetailsHome = async(req,res)=>{
  trainerModel.getMemberDetailsHome(req.headers,(result)=>{
    res.json(result);
  })
}


const initialMemberTodo = async(req,res)=>{
  trainerModel.initialMemberTodo(req.headers,(result)=>{
    res.status(200).json(result);
  })
}

  module.exports = { 
    getProfile,
    loadUserListPage,
    getUserList,
    loadUserHome,
    loadTodo,
    toHome,
    getMemberDetailsHome,
    initialMemberTodo
  };