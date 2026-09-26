const express = require("express");
const content = require("../../data/content.json");

const router = express.Router();

router.get("/pillars", (req, res) => res.json(content.pillars));
router.get("/locations", (req, res) => res.json(content.locations));
router.get("/clients", (req, res) => res.json(content.clients));

module.exports = router;
