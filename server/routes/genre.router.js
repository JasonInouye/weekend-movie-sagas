const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/:id', (req, res) => {
  // Add query to get all genres
  //console.log( 'inside of genre get', req.params);
  // const queryID = req.params
  const query = `SELECT a."name", b."title",b."poster",b."description"
    FROM "genres" a, "movies" b, "movies_genres" c
    where a."id" = c."genre_id" AND
    b."id" = c."movie_id" AND
    b."id" = $1;`;

  const value = [req.params.id]
  // pool.query(query, [req.params.id])
  pool.query(query, value)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: GET genres', err );
      res.sendStatus(500);
    })
});

module.exports = router;