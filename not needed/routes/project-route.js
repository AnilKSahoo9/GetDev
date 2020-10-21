const express = require('express');
const projectControllers= require('../controller/project-controller')
const router = express.Router();

router.get('/:pid', projectControllers.getProjectById);
router.get('/user/:uid', projectControllers.getProjectsByUserId);
router.post('/', projectControllers.createProject); 
router.patch('/:pid', projectControllers.updateProject);
router.delete('/:pid',  projectControllers.deleteProject)
module.exports = router;