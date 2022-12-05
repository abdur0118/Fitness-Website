var memberModel = require('../models/memberModel');

const getMe = async (req, res) => {
    memberModel.getPersonalDetails(req.body, (result)=>{
      res.status(200).json(result)
    })
  };
  
  const home = async(req,res)=>{
    memberModel.validateUser(req.body.name, req.body.password, function(result){
      if(!result){
        res.send("INvalid");
      }
      else{
        res.render('member/home',req.body);
      }
  });
}

var toHome = async(req,res)=>{
  res.render('member/home',req.body);
}


const trainerList =async (req,res)=>{
  memberModel.getTrainerList(function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

const packageList =async (req,res)=>{
  memberModel.getPackageList(function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}
const discListLoad = async (req,res)=>{
  // console.log("in promise");
    let list = new Array();
    let url = new Array();
    new Promise((resolve,reject)=>{
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('cab148eb3e2544d3a29f89bbc12bd2e4');
    newsapi.v2.everything({
      q: 'fitness',
      language: 'en'
    }).then(response=>{
        let temp = response.articles.splice(0,10)
        for(let i = 0;i<temp.length;i++){
          console.log("printing topics",temp[i].title.replace(/[^a-z0-9\s]/gi,''));
          list.push(temp[i].title.replace(/[^a-z0-9\s]/gi,''));
          url.push(temp[i].url);
        }
        resolve();
    })
  }).then(()=>{
  // console.log("after then promise");
    memberModel.insertDiscTopics(list,url,()=>{
      res.render('member/disc-list',req.body);
    });
  })
}
const getTopics = async (req,res)=>{  
  memberModel.getTopicsList((result)=>{
      res.status(200).send(result);
  })
}

const loadChat = async (req,res)=>{
  res.status(200).render('chat/chat_temp',req.body);
}

const loadTodo = async (req,res)=>{
  res.status(200).render('todo/todo',req.body);
}

const todoListLoad = async(req,res)=>{
  console.log(req.body)
  memberModel.initialTodoList(req.body.name,(result)=>{
    res.status(200).json(result);
  })
}

const getTopicName = async(req, res)=>{
  memberModel.getTopicName(req.headers.id,(topic)=>{
    res.send(topic);
  })
}

const getWeights = async(req,res)=>{
  memberModel.getWeightList(req.body.name,function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

const addWeight = async(req,res)=>{
  memberModel.addWeightDb(req.body)
}


const addCalorie = async(req,res)=>{
  memberModel.addCalorieDb(req.body)
}

const getCalories = async(req,res)=>{
  memberModel.getCalorieList(req.headers.name,function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}


const addStep = async(req,res)=>{
  memberModel.addStepDb(req.body)
}

const getSteps = async(req,res)=>{
  memberModel.getStepList(req.headers.name,function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

  module.exports = { 
    getMe,
     home,
     trainerList,
     toHome,
     packageList,
     discListLoad,
     getTopics,
     loadChat,
     loadTodo,
     todoListLoad,
     getTopicName,
     getWeights,
     addWeight,
     addCalorie,
     getCalories,
     addStep,
     getSteps,
     };