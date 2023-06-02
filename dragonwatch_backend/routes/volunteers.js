const express = require("express");
const router = express.Router();

const db = require("../db.js");

// get all volunteers
router.get("/", (_req, res) => {
  db.query("SELECT * FROM Volunteers", (err, rows, fields) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// get one volunteer
router.get("/:id", (req, res) => {
  console.log(req.body.id);
  db.query(
    "SELECT * FROM Volunteers WHERE id = ?",
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

// create volunteer
router.post("/", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  db.query(
    "INSERT INTO Volunteers (first_name, last_name, email) VALUES (?, ?, ?)",
    [first_name, last_name, email],
    (err, rows, fields) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send();
      }
    }
  );
});

// update volunteer
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  db.query(
    "UPDATE Volunteers SET first_name = ?, last_name = ?, email = ? WHERE id = ?",
    [first_name, last_name, email, id],
    (err, rows, fields) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(204).send();
      }
    }
  );
});

// delete volunteer
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Volunteers WHERE id = ?", [id], (err, rows, fields) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
