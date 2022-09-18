const { findActiveActivities,
        findActivityById, 
        updateUserActivity, 
        updateUserPoints } = require('../utils/utils.users')

const { mockPoints,
        mockObject,
        mockActive,
        singleObject,
        singleObjectMock,
        singleObjInactive,
        mockPointsResult } = require('./mocks/utils.users')

describe('findActiveActivities', () => {
  it('returns an array', () => {
    expect(findActiveActivities(mockObject))
      .toStrictEqual(expect.any(Object))
  })
  it('returns array with length of 2', () => {
    expect(findActiveActivities(mockObject))
      .toHaveLength(2)
  })
  it('returns only active objects', () => {
    expect(findActiveActivities(mockObject))
      .toHaveLength(2)
    expect(findActiveActivities(mockObject))
      .toStrictEqual(expect.arrayContaining(mockActive))
  })
})

describe('findActivityById', () => {
  it('returns an object', () => {
    expect(findActivityById(523370, mockObject))
      .toStrictEqual(expect.any(Object))
  })
  it('returned object id matches id passed in', () => {
    expect(findActivityById(523370, mockObject))
      .toStrictEqual({
        "timesClaimed": 0,
        "_id": "6254895ff18b9cf791850edc",
        "id": "523370",
        "title": "Dental Exam",
        "description": "This is the Dental Exam description",
        "value": 5,
        "maxUse": 2,
        "active": true,
        "__v": 0
    })
  })
})

describe('updateUserActivity', () => {
  it('increments timesClaimed attribte by 1', () => {
    expect(updateUserActivity(singleObject))
      .toStrictEqual(singleObjectMock)
  })
  it('deactivates object when maxUse is hit', () => {
    expect(updateUserActivity(singleObject))
      .toStrictEqual(singleObjInactive)
  })
  it('returns an object', () => {
    expect(updateUserActivity(singleObject))
      .toStrictEqual(expect.any(Object))
  })
})

describe('updateUserPoints', () => {
  it('adds points to user points object', () => {
    expect(updateUserPoints(mockPoints, singleObjectMock))
      .toStrictEqual(mockPointsResult)
  })
  it('ignores inactive objects', () => {
    expect(updateUserPoints(mockPoints, singleObjInactive))
      .toStrictEqual(mockPointsResult)
  })
})