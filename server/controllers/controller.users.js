const User = require('../models/model.user')
const Activity = require('../models/model.activity')
const { 
  findActiveActivities,
  findActivityById, 
  updateUserActivity, 
  updateUserPoints } = require('../utils/utils.users')


let testUser = {
  id: "6258542a229c4a4030a3a086",
  points: {}
}

module.exports.renderHome = async (req, res, next) => {

  let user = await User.findById(testUser.id)
  let activities = await Activity.find({})
  let activeActs = findActiveActivities(activities)

  if(!user.points.activities) {
    user.points.pointsGoal = 26
    user.points.currentPoints = 0
    user.points.ytdPoints = 0
    user.points.activities = activeActs
    await user.save()
  }
  
  res.json(user)

  next()
}

module.exports.renderClaims = async (req, res, next) => {

  let user = await User.findById(testUser.id)
  res.json(user.points)
  
  next()
}

module.exports.claimPoints = async (req, res, next) => {
  //need user object from session data
  let user = await User.findById(testUser.id)
  //need to pass activity.id from React component
  let activity = findActivityById(189617, user.points.activities)
  let index = user.points.activities.indexOf(activity)
  let updatedTotal = updateUserPoints(user.points, activity)
  let updatedAct = updateUserActivity(activity)
  
  user.points = updatedTotal
  user.points.activities[index] = updatedAct

  let updatedUser = await User.findByIdAndUpdate(testUser.id, user)
  res.json(updatedUser)

  next()
}
