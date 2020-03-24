const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

console.dir(projects)
console.log("running")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { projects });
});

router.get('/about', function(req, res, next) {
  res.render('about')
});

/* GET project page. */
router.get('/projects/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );

  console.dir(projects)
  
  if (project) {
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
