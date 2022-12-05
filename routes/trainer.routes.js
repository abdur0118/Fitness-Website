const express = require("express");
const trainerControllers = require("../controllers/trainer.controllers");
const router = express.Router();

router.post("/userlist", trainerControllers.loadUserListPage);
router.post("/getuserlist", trainerControllers.getUserList);
router.post("/user-home",trainerControllers.loadUserHome);
router.post('/load-todo', trainerControllers.loadTodo);
router.post('/todo-to-home',trainerControllers.toHome);
router.get('/getDetails', trainerControllers.getProfile);
router.get('/getMemberDetails',trainerControllers.getMemberDetailsHome);
router.get('/initial-todo-load',trainerControllers.initialMemberTodo);
module.exports = router;