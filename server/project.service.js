const Project = require('./Project.model');

const getAllProjects = async() => {
    return await Project.find().sort({ createdAt: -1 });
};

const createProject = async(data) => {
    const project = new Project(data);
    return await project.save();
};

const updateProject = async(id, data) => {
    return await Project.findByIdAndUpdate(id, data, { new: true });
};

const deleteProject = async(id) => {
    return await Project.findByIdAndDelete(id);
};

module.exports = {
    getAllProjects,
    createProject,
    updateProject,
    deleteProject
};