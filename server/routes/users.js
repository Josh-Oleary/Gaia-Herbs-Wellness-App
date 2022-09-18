const express = require("express");
const router = express.Router();
const users = require("../controllers/controller.users");

router.route('/portal')
  .get(users.renderHome)

router.route('/claims')
  .get(users.renderClaims)

router.route('/claims/:id')
  .post(users.claimPoints)

module.exports = router