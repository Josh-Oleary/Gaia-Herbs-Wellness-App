const Activity = require("../models/model.activity");
const { v4: uuidv4 } = require('uuid');

module.exports.renderActivities = async (req, res, next) => {
 
  let allActivites = await Activity.find({});
  res.json(allActivites);

  next();
};

module.exports.createActivity = async (req, res, next) => {

  const { title, description, value, maxUse, active } = req.body;
  const activity = new Activity({
    id: uuidv4().slice(0,6),
    title: title,
    description: description,
    value: value,
    maxUse: maxUse,
    active: active,
  });
  
  let registeredActivity = await activity.save( activity )

  res.json(registeredActivity);

  next()
};

module.exports.renderActivity = async (req, res, next) => {
  
  const activity = await Activity.findById(req.params.id).exec();
  
  res.json(activity)

  next();
};

module.exports.updateActivity = async (req, res, next) => {
  const actID = req.params.id;
  const updatedActivity = await Activity.findByIdAndUpdate(actID, {
    timesUsed: 0
  });

  res.json(updatedActivity);

  next();
};

module.exports.claimActivity = async (req, res, next) => {
  // const actID = req.params.id;

  // const activity = await Activity.findById(actID).exec();
  // const activityID = activity.id.toString();

  // const claimValue = activity.value;
  // const claimPayload = [activityID, activity.maxUse];

  // console.log("VALUE-->", claimValue);
  // console.log("PAYLOAD-->", claimPayload);

  // res.json(activity);
  res.json(req.body)
  next();
};