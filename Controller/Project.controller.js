const ProjectService = require("../Service/Project.service");

const projectCreationController = async (req, res) => {
    const { ProjectName, ProjectDescription } = req.body;

    try {
        const project = await ProjectService.CreateProject(ProjectName, ProjectDescription);
        res.status(201).json({ message: "Project created successfully", project });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getProjectByIdController = async (req, res) => {

    const { id } = req.params
    try {
        const project = await ProjectService.getbyidproject(id);
        res.status(200).json({ project });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const updateProjectController = async (req, res) => {
    const { id } = req.params
    try {
        const updatedProject = await ProjectService.UpdateProject(id, req.body);
        res.status(200).json({ message: "Project updated successfully", updatedProject });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Project
const deleteProjectController = async (req, res) => {
    try {
        const result = await ProjectService.DeleteProject(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getallprojects = async () => {
    try {
        const project = await ProjectService.AllProjects()
        res.status(200).json(project);
    } catch (err) {
    res.status(400).json({ error: err.message });

    }
}

module.exports = {
    projectCreationController,
    getProjectByIdController,
    updateProjectController,
    deleteProjectController,
    getallprojects
};
