const uuid = require('uuid').v4;

const HttpError = require('../models/http-error');
let DUMMY_PROJECT = [
    {
      id: 'p1',
      title: 'Github_user_fetch',
      description: 'to fetch all the repositary details of a user',
     creator:"u1"
    }
  ];  
const getProjectById=(req,res,next)=>{
    const projectId = req.params.pid; // { pid: 'p1' }
    const project = DUMMY_PROJECT.find(p => {
      return p.id === projectId;
    });

    if(!project){
       throw new HttpError('Could not find a place for the provided id',404);
    }

    res.json(project); // => { place } => { place: place }
};
const getProjectsByUserId=(req,res,next)=>{
    const userId = req.params.uid;
    const projects = DUMMY_PROJECT.filter(p=>{
        return p.creator ===userId;
    });
    if(!projects||projects.length === 0){
  return next(new HttpError('Could not find a places for the provided userid'));
   }
    res.json({projects});

};
const createProject =(req,res,next)=>{
 const {title,description,creator}=req.body;
 
 const createProject={
    id: uuid(),
     title,
     description,
     creator
 };
 DUMMY_PROJECT.push(createProject);
 res.status(201).json({project:createProject});
};
const updateProject = (req, res, next) => {
  const { title, description } = req.body;
  const projectId = req.params.pid;

  const updatedProject= { ...DUMMY_PROJECT.find(p => p.id === projectId) };
  const placeIndex = DUMMY_PROJECT.findIndex(p => p.id === projectId);
  updatedProject.title = title;
  updatedProject.description = description;

  DUMMY_PROJECT[placeIndex] = updatedProject;

  res.status(200).json({place: updatedProject});
};
const deleteProject= (req, res, next) => {
  const projectId = req.params.pid;
  DUMMY_PROJECT = DUMMY_PROJECT.filter(p => p.id !== projectId);
  res.status(200).json({ message: 'Deleted project.' });
};
exports.getProjectById =getProjectById;
exports.getProjectsByUserId=getProjectsByUserId;
exports.createProject=createProject;
exports.updateProject=updateProject;
exports.deleteProject=deleteProject;