const express = require("express");
const router = express.Router();
const activity = require("../controllers/controller.activity");

router.route("/")
  .get(activity.renderActivities)
  .post(activity.createActivity);

router.route("/:id")
  .get(activity.renderActivity)
  .put(activity.updateActivity)

module.exports = router;
