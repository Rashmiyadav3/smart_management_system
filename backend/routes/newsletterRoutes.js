const express = require("express");
const router = express.Router();
const Newsletter = require("../models/Newsletter");

router.post("/", async (req, res) => {
  try {
    const subscriber = new Newsletter(req.body);
    await subscriber.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Subscription failed" });
  }
});

module.exports = router;
