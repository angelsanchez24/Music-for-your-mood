const express = require("express");
const Example = require("../models/ExampleModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newExample = new Example(req.body);
    await newExample.save();
    res.json(newExample);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
