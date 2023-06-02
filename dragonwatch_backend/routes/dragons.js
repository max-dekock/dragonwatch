const express = require("express");
const router = express.Router();

const db = require("../db.js");

// get all dragons
router.get("/", (_req, res) => {
  db.query("SELECT * FROM Dragons", (err, rows, fields) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// get one dragon
router.get("/:id", (req, res) => {
  console.log(req.body.id);
  db.query(
    "SELECT * FROM Dragons WHERE id = ?",
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
  const nickame = req.body.nickame;
  const sex = req.body.sex;
  const color = req.body.color;
  const length = req.body.length;
  const wingspan = req.body.wingspan;
  const hatch_year = req.body.hatch_year;
  const identifying_marks = req.body.identifying_marks;
  db.query(
    "INSERT INTO Dragons (nickame, sex, color, length, wingspan, hatch_year, identifying_marks) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [nickame, sex, color, length, wingspan, hatch_year, identifying_marks],
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
  const nickame = req.params.nickame;
  const sex = req.params.sex;
  const color = req.params.color;
  const length = req.params.length;
  const wingspan = req.params.wingspan;
  const hatch_year = req.params.hatch_year;
  const identifying_marks = req.params.identifying_marks;
  db.query(
    "UPDATE Dragons SET nickame = ?, sex = ?, color = ?, length = ?, wingspan = ?, hatch_year = ?, identifying_marks = ?, WHERE id = ?",
    [nickame, sex, color, length, wingspan, hatch_year, identifying_marks, id],
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
