const mockPoints = {
  "pointsGoal": 26,
  "currentPoints": 0,
  "ytdPoints": 0,
  "activities": [
      {
          "timesClaimed": 0,
          "_id": "62548931f18b9cf791850ed8",
          "id": "189617",
          "title": "Lunch and Learn",
          "description": "This is the Lunch and Learn description",
          "value": 2,
          "maxUse": 2,
          "active": false,
          "__v": 0
      },
      {
          "timesClaimed": 0,
          "_id": "62548944f18b9cf791850eda",
          "id": "115761",
          "title": "Annual Physical",
          "description": "This is the Physical description",
          "value": 10,
          "maxUse": 1,
          "active": false,
          "__v": 0
      },
      {
          "timesClaimed": 0,
          "_id": "6254895ff18b9cf791850edc",
          "id": "523370",
          "title": "Dental Exam",
          "description": "This is the Dental Exam description",
          "value": 5,
          "maxUse": 2,
          "active": true,
          "__v": 0
      }
  ]
}
const mockPointsResult = {
  "pointsGoal": 26,
  "currentPoints": 2,
  "ytdPoints": 2,
  "activities": [
      {
          "timesClaimed": 0,
          "_id": "62548931f18b9cf791850ed8",
          "id": "189617",
          "title": "Lunch and Learn",
          "description": "This is the Lunch and Learn description",
          "value": 2,
          "maxUse": 2,
          "active": false,
          "__v": 0
      },
      {
          "timesClaimed": 0,
          "_id": "62548944f18b9cf791850eda",
          "id": "115761",
          "title": "Annual Physical",
          "description": "This is the Physical description",
          "value": 10,
          "maxUse": 1,
          "active": false,
          "__v": 0
      },
      {
          "timesClaimed": 0,
          "_id": "6254895ff18b9cf791850edc",
          "id": "523370",
          "title": "Dental Exam",
          "description": "This is the Dental Exam description",
          "value": 5,
          "maxUse": 2,
          "active": true,
          "__v": 0
      }
  ]
}

const mockObject = [
{
    "timesClaimed": 0,
    "_id": "62548931f18b9cf791850ed8",
    "id": "189617",
    "title": "Lunch and Learn",
    "description": "This is the Lunch and Learn description",
    "value": 2,
    "maxUse": 2,
    "active": true,
    "__v": 0
},
{
    "timesClaimed": 0,
    "_id": "62548944f18b9cf791850eda",
    "id": "115761",
    "title": "Annual Physical",
    "description": "This is the Physical description",
    "value": 10,
    "maxUse": 1,
    "active": false,
    "__v": 0
},
{
    "timesClaimed": 0,
    "_id": "6254895ff18b9cf791850edc",
    "id": "523370",
    "title": "Dental Exam",
    "description": "This is the Dental Exam description",
    "value": 5,
    "maxUse": 2,
    "active": true,
    "__v": 0
}
]
const mockActive = [
{
    "timesClaimed": 0,
    "_id": "62548931f18b9cf791850ed8",
    "id": "189617",
    "title": "Lunch and Learn",
    "description": "This is the Lunch and Learn description",
    "value": 2,
    "maxUse": 2,
    "active": true,
    "__v": 0
},
{
    "timesClaimed": 0,
    "_id": "6254895ff18b9cf791850edc",
    "id": "523370",
    "title": "Dental Exam",
    "description": "This is the Dental Exam description",
    "value": 5,
    "maxUse": 2,
    "active": true,
    "__v": 0
}
]
const singleObject = {
    "timesClaimed": 0,
    "_id": "62548931f18b9cf791850ed8",
    "id": "189617",
    "title": "Lunch and Learn",
    "description": "This is the Lunch and Learn description",
    "value": 2,
    "maxUse": 2,
    "active": true,
    "__v": 0
}
const singleObjectMock = {
    "timesClaimed": 1,
    "_id": "62548931f18b9cf791850ed8",
    "id": "189617",
    "title": "Lunch and Learn",
    "description": "This is the Lunch and Learn description",
    "value": 2,
    "maxUse": 2,
    "active": true,
    "__v": 0
}
const singleObjInactive = {
    "timesClaimed": 2,
    "_id": "62548931f18b9cf791850ed8",
    "id": "189617",
    "title": "Lunch and Learn",
    "description": "This is the Lunch and Learn description",
    "value": 2,
    "maxUse": 2,
    "active": false,
    "__v": 0
}

module.exports = {
  mockPoints,
  mockObject,
  mockActive,
  singleObject,
  singleObjectMock,
  singleObjInactive,
  mockPointsResult
}