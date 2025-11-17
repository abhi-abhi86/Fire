const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const isAdmin = require('../middleware/isAdmin');

router.get('/', projectController.getProjects);
router.post('/', isAdmin, projectController.addProject);
router.put('/:id', isAdmin, projectController.editProject);
router.delete('/:id', isAdmin, projectController.removeProject);

module.exports = router;