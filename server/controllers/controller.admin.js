const User = require('../models/model.user')
const Benefits = require('../models/model.benefits')
const { v4: uuidv4 } = require('uuid');

module.exports.renderUsers = async (req, res, next) => {
    let allUsers = await User.find({})

    res.send(allUsers)

    next()
}

module.exports.createUser = async (req, res, next) => {


    const { name, email, points, isAdmin} = req.body

    const user = new User({
        id: uuidv4().slice(0,6),
        name: name,
        email: email,
        points: points,
        isAdmin: isAdmin
    })

    const registeredUser = await user.save(user)

    res.send(registeredUser)

    next()
}

module.exports.getUser = async (req, res, next) => {
    let userID = req.params.id

    let user = await User.findById(userID)
    
    res.send(user)

    next()
}

module.exports.updateUser = async (req, res, next) => {
    let userID = req.params.id
    
    let user = await User.findByIdAndUpdate(userID, { active: false })

    res.send(user)

    next()
}

module.exports.getBenefits = async (req, res, next) => {
    const benefits = await Benefits.find({})

    res.json(benefits)
}
module.exports.createBenefits = async (req, res, next) => {
    const { year, wellness, noWellness } = req.body

    const benefits = new Benefits({
        year: year,
        wellness: wellness,
        noWellness: noWellness
    })

    let savedBenefits = await benefits.save(benefits)

    res.json(savedBenefits)
}
module.exports.updateBenefits = async (req, res, next) => {
    const { year, empOnly, empAndSpouse, empAndChildren, empAndFamily } = req.body

    let newBenefits = await Benefits.findByIdAndUpdate("62599a2854c6dbbaf630328e", {
        year: year,
        empOnly: empOnly,
        empAndSpouse: empAndSpouse,
        empAndChildren: empAndChildren,
        empAndFamily: empAndFamily
    })
    
    res.json(newBenefits)
}

