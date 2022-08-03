const express = require("express");
const router = express.Router();

router.get("/test", (req,res) => res.json({msg: "messages route work"}));

module.exports = router;