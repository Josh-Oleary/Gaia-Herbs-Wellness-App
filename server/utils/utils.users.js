const findActiveActivities = (arr) => {
  let result = []
  for(let act of arr){
    act.active && (result.push(act))
  }
  return result
}

const findActivityById = (id, arr) => {
  let result = [];
  for(let act of arr){
    if(act.id == id){
      result = act
    }
  }
  return result
}

const updateUserActivity = (obj) => {
  obj.timesClaimed++
  obj.timesClaimed >= obj.maxUse && (
    obj.active = false
  )
  return obj
}

const updateUserPoints = (obj, activity) => {
  activity.active && (
    obj.currentPoints += activity.value,
    obj.ytdPoints += activity.value
  )
  return obj
}



module.exports = {
  findActiveActivities,
  findActivityById,
  updateUserActivity,
  updateUserPoints
}