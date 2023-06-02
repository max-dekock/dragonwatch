const express = require("express");
const router = express.Router();

const db = require("../db.js");

// get all observations
router.get("/", (_req, res) => {
  db.query("SELECT * FROM Observations", (err, rows, fields) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// get one observation
router.get("/:id", (req, res) => {
  console.log(req.body.id);
  db.query(
    "SELECT * FROM Observations WHERE id = ?",
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

// create dragon
router.post("/", (req, res) => {
  const volunteer_id = req.body.volunteer_id;
  const observation_time = req.body.observation_time;
  const location = req.body.location;
  db.query(
    "INSERT INTO Dragons (volunteer_id, observation_time, location) VALUES (?, ?, ?)",
    [volunteer_id, observation_time, location],
    (err, rows, fields) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send();
      }
    }
  );
});

// update dragon
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const volunteer_id = req.params.volunteer_id;
  const observation_time = req.params.observation_time;
  const location = req.params.location;
  db.query(
    "UPDATE Dragons SET volunteer_id = ?, observation_time = ?, location = ?, WHERE id = ?",
    [volunteer_id, observation_time, location, id],
    (err, rows, fields) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(204).send();
      }
    }
  );
});

// delete dragon
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Dragons WHERE id = ?", [id], (err, rows, fields) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
