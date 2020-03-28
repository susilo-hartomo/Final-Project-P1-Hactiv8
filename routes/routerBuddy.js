const router = require('express').Router()
const BuddyControllers = require('../controllers/controllerBuddy')

router.get('/', BuddyControllers.get)

//Menambahkan mbuddy
router.get('/add', BuddyControllers.addForm)
router.post('/add', BuddyControllers.addBuddy)

//Edit buddy
router.get('/edit/:id', BuddyControllers.editForm)
router.post('/edit/:id', BuddyControllers.updateBuddy)

//Delete buddy
router.get('/delete/:id', BuddyControllers.dell)



module.exports = router