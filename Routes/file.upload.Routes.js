const express = require('express')
const router = express.Router()

const filecontroller = require("../Controller/file.upload.controller")
const upload = require('../config/multer')

router.post("/uploadfiles",upload.single("file"),filecontroller.fileupload)
router.get("/getfiles",filecontroller.getfiles)
router.put("/updatefiles/:id",filecontroller.updatefile)
router.delete("/deletefiles/:id",filecontroller.deletefile)

module.exports = router