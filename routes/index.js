const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


/* GET Movies list */
router.get('/movies', (req,res,next) => {
    Movie.find()
    .then(allMovies => {
        res.render('movies', { movies: allMovies })
    })
    .catch(error => {console.log("movies not loaded",error);
    next(error);
    });
});


/* GET Selected Movie */
router.get('/movies/:id',(req,res,next) =>{
    Movie.findById(req.params.id)
    .then(chosenMovie => res.render('movie-details',{ movie: chosenMovie }))
    .catch(error => {console.log('error retrieving selected movie',error);
    next(error);
    })
});


module.exports = router;