const fileSchema = require("../Model/Assets.model")

const getFiles = async (projectId) => {
  const files = await fileSchema.find(projectId);
  return files
}

const updateFile = async (id, updateData) => {
  const file = await fileSchema.findById(id);
  if (!file) throw new Error("File not found");

  Object.assign(file, updateData);
  return await file.save();
};

const deleteFile = async (id) => {
  const file = await fileSchema.findById(id);
  if (!file) throw new Error("File not found");

  await file.deleteOne();
  return { message: "File deleted successfully" };
};

const getbyid = async(id)=>{
  try{

    const file = await fileSchema.findOne(id)
    return file
  }
  catch(err){
    console.log(err,"get by id error in server layer")
  }
}
module.exports ={
    getFiles,
    deleteFile,
    updateFile,
    getbyid
}