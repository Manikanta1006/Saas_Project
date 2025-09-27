const express = require("express")
const router = express.Router()

const ProjectController = require("../Controller/Project.controller")

router.post("/createproject",ProjectController.projectCreationController)
router.get("/getallprojects",ProjectController.getallprojects)
router.put("/updateproject/:id",ProjectController.updateProjectController)
router.put("/deleteproject/:id",ProjectController.deleteProjectController)
router.get("/projectgetbyid/:id",ProjectController.getProjectByIdController)


module.exports = router