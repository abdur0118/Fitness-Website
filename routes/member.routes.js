const express = require("express");
const memberControllers = require("../controllers/member.controllers");
const router = express.Router();

router.post("/getDetails", memberControllers.getMe);
router.get("/home",memberControllers.toHome)

router.post("/home",memberControllers.home);

router.get("/getTrainerList", memberControllers.trainerList);

router.get("/getPackageList", memberControllers.packageList);

router.post("/disc-list-page", memberControllers.discListLoad);
router.get("/disc-list-page", memberControllers.discListLoad);


router.get("/get-disc-list", memberControllers.getTopics);

router.post('/chat',memberControllers.loadChat);

router.post('/initial-todo-load',memberControllers.todoListLoad);

router.post('/load-todo',memberControllers.loadTodo);
router.get('/getTopicName',memberControllers.getTopicName);

router.post('/get-weights',memberControllers.getWeights);
router.post('/add-weight',memberControllers.addWeight);

router.post('/add-calorie',memberControllers.addCalorie);
router.get('/get-calories',memberControllers.getCalories);

router.post('/add-step',memberControllers.addStep);
router.get('/get-step',memberControllers.getSteps);



module.exports = router;