const projectmodel = require("../Model/Project.model")

const CreateProject = async(data)=>{

    try{
        const project = await projectmodel.create(data)
        return project
    }
    catch(err){
        console.log(err,"project creation servive error")
    }
}

const AllProjects = async()=>{
    try{
        const project = await projectmodel.find()
        return project
    }
    catch(err){
        console.log(err,"getting all projects error service layer")
    }
}

const DeleteProject = async(id)=>{

    try{
        const project = await projectmodel.findByIdAndDelete(id)
        return project
    }
    catch(err){
        console.log(err,"project deletion error in service layer")
    }
}

const UpdateProject = async(id,data)=>{
    try{
       const project = await projectmodel.findByIdAndUpdate(id,data,{new:true}) 
       return project
    }       
    catch(err){
        console.log(err,"project deletion error in service layer")
    }
}

const getbyidproject = async(id)=>{
    try{
        const project = await projectmodel.findById(id)
        return project;
    }
    catch(err){
        console.log(err,"project getting error by id")
    }
}

const ProjectCount = async () => {
    try {
        const project = await projectmodel.aggregate([
           { $group:{ _id:null, totalprojects: { $sum: 1 } }}
        ])
        return project;
    } catch (err) {
        console.log(err)
    }
}

module.exports ={
    CreateProject,
    AllProjects,
    DeleteProject,
    UpdateProject,
    getbyidproject,
    ProjectCount
}