const express = require("express");
const adminControllers = require("../controllers/admin.controllers");
const router = express.Router();

router.post("/home", adminControllers.home);
router.get('/home',adminControllers.toHome);
router.get("/getAdminList", adminControllers.adminList);

router.get("/user", adminControllers.loadUserListPage);
router.get("/getUserList", adminControllers.userList);

router.get("/trainer", adminControllers.loadTrainerListPage);
router.get("/getTrainerList", adminControllers.trainerList);


router.get("/package", adminControllers.loadPackageListPage);
router.get("/getPackageList", adminControllers.packageList);

router.post('/register-admin', adminControllers.addAdmin);
router.post('/submit-admin-form',adminControllers.submitAdminForm);

router.post('/remove-admin',adminControllers.removeAdmin);
router.post('/remove-admin-form',adminControllers.removeAdminForm);

router.post('/register-trainer', adminControllers.addTrainer);
router.post('/submit-trainer-form',adminControllers.submitTrainerForm);

router.post('/remove-trainer',adminControllers.removeTrainer);
router.post('/remove-trainer-form',adminControllers.removeTrainerForm);

router.post('/register-package', adminControllers.addPackage);
router.post('/submit-package-form',adminControllers.submitPackageForm);

router.post('/remove-package',adminControllers.removePackage);
router.post('/remove-package-form',adminControllers.removePackageForm);

router.post('/register-member', adminControllers.addMember);
router.post('/submit-member-form',adminControllers.submitMemberForm);
 
router.post('/remove-member',adminControllers.removeMember);
router.post('/remove-member-form',adminControllers.removeMemberForm);

router.post('/edit-admin',adminControllers.editAdminLoad);
router.post('/edit-admin-form', adminControllers.editAdmin);
router.get('/fillAdminEditDetails',adminControllers.editAdminDetailsSend)

router.post('/edit-member',adminControllers.editMemberLoad);
router.post('/edit-member-form', adminControllers.editMember);
router.get('/fillMemberEditDetails',adminControllers.editMemberDetailsSend)

router.post('/edit-trainer',adminControllers.editTrainerLoad);
router.post('/edit-trainer-form', adminControllers.editTrainer);
router.get('/fillTrainerEditDetails',adminControllers.editTrainerDetailsSend)

router.post('/edit-package',adminControllers.editPackageLoad);
router.post('/edit-package-form', adminControllers.editPackage);
router.get('/fillPackageEditDetails',adminControllers.editPackageDetailsSend)

router.get("/getdueUsersList", adminControllers.dueUserList);
router.get("/notify-users-fee",adminControllers.notifyMember);


console.log(typeof(router));
module.exports = router;
