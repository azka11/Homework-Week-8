const express = require('express');
const router = express.Router();
const pool = require('../queries.js');

router.get('/film', (req, res) => {
    pool.query('SELECT * FROM film', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

router.get('/film/:film_id', (req, res) => {
    const filmId = req.params.film_id;

    pool.query(`SELECT * FROM film WHERE film_id = $1`, [filmId], (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

module.exports = router; 