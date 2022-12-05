var adminModel = require('../models/adminModel');



const home = async(req,res)=>{
    adminModel.validateUser(req.body.name, req.body.password, function(result){
      if(!result){
        res.status(400).send("INvalid");
      }
      else{
        res.status(200).render('admin/home',req.body);
      }
  });
}

const toHome = async(req,res)=>{
  res.render('admin/home');
}


const adminList = async (req, res) => {
  adminModel.getList(function(result){
    if(!result){
      res.status(400).send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
};

const loadUserListPage = async (req,res)=>{
  res.render('admin/userList');
}

const userList =async (req,res)=>{
  adminModel.getUserList(function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

const loadTrainerListPage = async (req,res)=>{
  res.render('admin/trainerList');
}

const trainerList =async (req,res)=>{
  adminModel.getTrainerList(function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

const loadPackageListPage = async (req,res)=>{
  res.render('admin/packageList');
}

const packageList =async (req,res)=>{
  adminModel.getPackageList(function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

const addAdmin = async(req,res)=>{
  res.status(200).render('admin/add-admin',{'name':req.body.adminName});
}

const submitAdminForm = async(req,res)=>{
    adminModel.addAdmin(req.body,()=>{
      res.status(200).render('admin/home',{'name':req.body.adminName});  
    })
}

const removeAdmin = async(req,res)=>{
  res.status(200).render('admin/remove-admin',{'name':req.body.adminName});  
}

const removeAdminForm = async(req,res)=>{
  adminModel.removeAdmin(req.body,()=>{
    res.status(200).render('admin/home',{'name':req.body.adminName});  
  },()=>{
    res.send('Failed Check credentials')
  })
}

const addTrainer = async(req,res)=>{
  res.status(200).render('admin/add-trainer',{'name':req.body.adminName});
}

const submitTrainerForm = async(req,res)=>{
    adminModel.addTrainer(req.body,()=>{
      res.status(200).render('admin/home',{'name':req.body.adminName});  
    })
}

const removeTrainer = async(req,res)=>{
  res.status(200).render('admin/remove-trainer',{'name':req.body.adminName});  
}

const removeTrainerForm = async(req,res)=>{
  adminModel.removeTrainer(req.body,()=>{
    res.status(200).render('admin/home',{'name':req.body.adminName});  
  },()=>{
    res.send('Failed Check credentials')
  })
}

const addPackage = async(req,res)=>{
  res.status(200).render('admin/add-package',{'name':req.body.adminName});
}

const submitPackageForm = async(req,res)=>{
    adminModel.addPackage(req.body,()=>{
      res.status(200).render('admin/home',{'name':req.body.adminName});  
    })
}

const removePackage = async(req,res)=>{
  res.status(200).render('admin/remove-package',{'name':req.body.adminName});  
}

const removePackageForm = async(req,res)=>{
  adminModel.removePackage(req.body,()=>{
    res.status(200).render('admin/home',{'name':req.body.adminName});  
  },()=>{
    res.send('Failed Check credentials')
  })
}



const addMember = async(req,res)=>{
  res.status(200).render('admin/add-member',{'name':req.body.adminName});
}


const submitMemberForm = async(req,res)=>{
    adminModel.addMember(req.body,()=>{
      res.status(200).render('admin/home',{'name':req.body.adminName});  
    })
}

const removeMember = async(req,res)=>{
  res.status(200).render('admin/remove-member',{'name':req.body.adminName});  
}

const removeMemberForm = async(req,res)=>{
  adminModel.removeMember(req.body,()=>{
    res.status(200).render('admin/home',{'name':req.body.adminName});  
  },()=>{
    res.send('Failed Check credentials')
  })
}

const editAdminLoad = async(req,res)=>{
  res.status(200).render('admin/edit-admin',{name: req.body.adminName, adminName: req.body.name,
  password: req.body.password, phoneNumber:req.body.phoneNumber, email: req.body.email});
}

const editAdmin = async(req,res)=>{
  adminModel.editAdmin(req.body,()=>{ 
    res.status(200).redirect('/admin/home'); 
  })
}

const editAdminDetailsSend = async(req,res)=>{
  adminModel.editAdminDetailsSend(req.headers,(result)=>{
    res.json(result);
  })
}

const editMemberDetailsSend = async(req,res)=>{
  adminModel.editMemberDetailsSend(req.headers,(result)=>{
    res.json(result);
  })
}
const editTrainerDetailsSend = async(req,res)=>{
  adminModel.editTrainerDetailsSend(req.headers,(result)=>{
    res.json(result);
  })
}

const editPackageDetailsSend = async(req,res)=>{
  adminModel.editPackageDetailsSend(req.headers,(result)=>{
    res.json(result);
  })
}

const editMemberLoad = async(req,res)=>{
  res.status(200).render('admin/edit-member',{name: req.body.adminName, memberName: req.body.name,
  password: req.body.password, age:req.body.age,  phoneNumber:req.body.phoneNumber, email: req.body.email,
   feeStatus: req.body.feeStatus, balance: req.body, packageid: req.body.packageid, trainerName: req.body.trainerName
  ,startDate: req.body.startDate });
}

const editMember = async(req,res)=>{
  adminModel.editMember(req.body,()=>{ 
    res.status(200).redirect('/admin/home'); 
  })
}

const editTrainerLoad = async(req,res)=>{
  res.status(200).render('admin/edit-trainer',{name: req.body.adminName, trainerName: req.body.name,
  password: req.body.password, age:req.body.age,  phoneNumber:req.body.phoneNumber, email: req.body.email,salary: req.body.salary});
}

const editTrainer = async(req,res)=>{
  adminModel.editTrainer(req.body,()=>{ 
    res.status(200).redirect('/admin/home'); 
  })
}

const editPackageLoad = async(req,res)=>{
  res.status(200).render('admin/edit-package',{name: req.body.adminName, id: req.body.id,
  duration: req.body.duration, amount:req.body.amount,  description:req.body.description});
}

const editPackage = async(req,res)=>{
  adminModel.editPackage(req.body,()=>{
    res.status(200).redirect('/admin/home'); 
  })
}

const dueUserList =async (req,res)=>{
  adminModel.getdueUserList(function(result){
    if(!result){
      res.send("INvalid");
    }
    else{
      res.status(200).json(result);
    }
});
}

const notifyMember = async(req,res)=>{
  adminModel.notifyMember(()=>{
    res.status(200).json({message:"Success"});
  })
}

module.exports = {  
  adminList,
   home,
   toHome,
   loadUserListPage, 
   userList,
   loadTrainerListPage,
   trainerList ,
   loadPackageListPage,
   packageList,
   addAdmin,
   submitAdminForm,
   removeAdmin,
   removeAdminForm,
   addTrainer,
   submitTrainerForm,
   removeTrainer,
   removeTrainerForm,
   addPackage,
   submitPackageForm,
   removePackage,
   removePackageForm,
   addMember,
   submitMemberForm,
   removeMember,
   removeMemberForm,
   editAdminLoad,
   editAdmin,
   editMemberLoad,
   editMember,
   editTrainerLoad,
   editTrainer,
   editPackageLoad,
   editPackage,
   dueUserList,
   notifyMember,
   editAdminDetailsSend,
   editMemberDetailsSend,
   editTrainerDetailsSend,
   editPackageDetailsSend
  };
