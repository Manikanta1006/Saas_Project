const filemodel = require("../Model/Assets.model")

const fileService = require("../Service/files.service")

const fileupload = async () => {
    const { project } = req.body;

    try {
        const newfile = new filemodel({
            project: project,             
            user: req.user.id,            
            filename: req.file.filename,  
            path: req.file.path
        })
        await newfile.save()
        res.status(201).json({message:"file upload successfully",newfile})
    }
    catch (err) {
        res.status(500).json({message:"file upload falied",error: err.message})
    }
}

const getfiles = async (req, res) => {
  try {
    const files = await fileService.getFiles(req.params.id);
    res.status(200).json({ files });
  } catch (err) {
    res.status(500).json({ message: "Error fetching files", error: err.message });
  }
};

const updatefile = async (req, res) => {
  try {
    const updatedFile = await fileService.updateFile(req.params.id, req.body);
    res.status(200).json({ message: "File updated successfully", updatedFile });
  } catch (err) {
    res.status(500).json({ message: "Error updating file", error: err.message });
  }
};

const deletefile = async (req, res) => {
  try {
    const result = await fileService.deleteFile(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Error deleting file", error: err.message });
  }
};


const getfileById = async (req, res) => {
  const {id} = req.params.id
  try {
    const file = await fileService.getbyid(id);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    res.status(200).json({ file });
  } catch (err) {
    res.status(500).json({ message: "Error fetching file", error: err.message });
  }
};

module.exports = {
    fileupload,
    getfiles,
    updatefile,
    deletefile,
    getfileById
}