const express = require("express");
const router = express.Router();

const db = require("../db.js");

// get all confirmed sightings
router.get("/", (_req, res) => {
  db.query(
    `SELECT Confirmed_Sightings.id, observation_id, analyst_id, GROUP_CONCAT(dragon_id) as dragon_ids 
        FROM Confirmed_Sightings
        INNER JOIN Dragon_Confirmed_Sightings 
        ON Confirmed_Sightings.id = Dragon_Confirmed_Sightings.confirmed_sighting_id`,
    (err, rows, fields) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
        const data = rows.map(row => {
            return {
                id: row[0],
                observation_id: row[1],
                analyst_id: row[2],
                dragon_ids: row[3].split(',').map(parseInt)
            };
        })
      res.json(data);
    }
  });
});

// get one confirmed sighting
router.get("/:id", (req, res) => {
  console.log(req.body.id);
  db.query(
    `SELECT Confirmed_Sightings.id, observation_id, analyst_id, GROUP_CONCAT(dragon_id) as dragon_ids
        FROM Confirmed_Sightings
        INNER JOIN Dragon_Confirmed_Sightings 
        ON Confirmed_Sightings.id = Dragon_Confirmed_Sightings.confirmed_sighting_id
        WHERE Confirmed_Sightings.id = ?`,
    [req.params.id],
    (err, rows, fields) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        console.log(rows);
        res.json(rows[0]);
      }
    }
  );
});

// create confirmed sighting
router.post("/", (req, res) => {
    const observation_id = req.body.observation_id;
    const analyst_id = req.body.analyst_id;
    const dragon_ids = req.body.dragon_ids;
    const connection = db.getConnection();
    try {
        connection.beginTransaction(err => {
            if (err) { throw err; }
            let id;
            connection.query(
                'INSERT INTO Confirmed_Sightings (observation_id, analyst_id) VALUES (?, ?)',
                [observation_id, analyst_id],
                (err, results) => {
                    if (err) {
                        return connection.rollback(() => { throw err });
                    }
                    id = results.insertId;
                });
            connection.query(
                'INSERT INTO Dragon_Confirmed_Sightings (confirmed_sighting_id, dragon_id) VALUES ?',
                [dragon_ids.map(dragon_id => [id, dragon_id])],
                (err, results) => {
                    if (err) {
                        return connection.rollback(() => { throw err });
                    }
                }
            );
            connection.commit(err => {
                if (err) {
                    return connection.rollback(() => { throw err });
                }
            });
        });
    } catch (err) {
        connection.release();
        res.status(500).send(err.message);
    }
});

// update confirmed sighting
router.put("/:id", (req, res) => {
    const id = req.params.id;
    // todo
});

// delete observations
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Confirmed_Sightings WHERE id = ?", [id], (err, rows, fields) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
