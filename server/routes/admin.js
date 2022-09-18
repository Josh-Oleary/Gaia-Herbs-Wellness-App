const express = require('express')
const router = express.Router()
const admin = require('../controllers/controller.admin')

router.route('/users')
    .get(admin.renderUsers)
    .post(admin.createUser)

router.route('/users/:id')
    .get(admin.getUser)
    .put(admin.updateUser)

router.route('/benefits')
    .get(admin.getBenefits)
    .post(admin.createBenefits)
    .put(admin.updateBenefits)

module.exports = router;