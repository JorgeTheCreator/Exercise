const router = require('express').Router();
let Excercise = require('../models/excercise.model');

//--------get all excercise--------------------------find()
router.route('/').get((req, res) => {
  Excercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error' + err));
});
//--------get one  excercise ------------------------findById(req.params.id)
router.route('/:id').get((req, res) => {
  Excercise.findById(req.params.id)
    .then(exercises => {console.log('got one id '), res.json(exercises)})
    .catch(err => res.status(400).json('Error' + err));
});

//--------Delete one excercise --------------------findByIdAndDelete(req.params.id)
router.route('/:id').delete((req, res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then(exercises => {console.log('successfully deleted'),res.json(exercises)})
    .catch(err => res.status(400).json('Error' + err));
});

//--------add an excercise------------------------------save()
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Excercise({
    username,
    description,
    duration,
    date
  });

  newExercise
    .save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error: ----->' + err));
});

//--------Update an excercise------------------------------findById(req.params.id)--save()
router.route('/update/:id').post((req, res) => {
  Excercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);  
      exercise
        .save()
        .then(() => res.json('exercise updated!!'))
        .catch(err => res.status(400).json('Error: ----->' + err));
    })
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;
