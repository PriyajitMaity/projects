const express = require("express");

const router = express.Router();

const { register } =require('../controller/auth');

router.post('/', register);

module.exports = router;
