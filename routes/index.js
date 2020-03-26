const express = require('express');
const Router = express.Router();
const { projects } = require('../data/data.json');

console.log("test", projects)

// Index route
Router.get('/', function(req, res, next) {
  res.render('index', { projects });
});

// About route
Router.get("/about", function(req, res, next){
  res.render('about');
})


Router.get('/projects/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );

  console.dir(projects)

  if (project) {
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
});
// // Project route with ID param
// Router.get("/project/:id", function(req, res, next){
//   const pro = parseInt(req.params.id);
//   const project = projects[pro];
//
//   // check if project page has valid ID else throw specific project page error
//   if(Number.isInteger(pro) && pro < projects.length && pro >= 0){
//     return res.render('project',{project});
//   } else{
//     let err = new Error("This project page doesn't exist");
//     next(err);
//   }
// })

module.exports = Router;
