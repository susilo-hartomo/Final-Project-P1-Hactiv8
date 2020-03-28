const router = require('express').Router()
const ControllerIndex = require('../controllers/controllerIndex')

const routerStudent = require('./routerStudent')
const routerBuddy = require('./routerBuddy')
const routerChallenge = require('./routerChallenge')


router.get('/', (req, res) => { 
    if(req.query.err){
        let error = req.query.err 
        res.render('home', { error, success: null })
    } else {
        let success = req.query.success
        res.render('home', { success, error: null })
    }
})
 

router.post('/login', ControllerIndex.login)
router.get('/logout', ControllerIndex.logout)
router.use((req, res, next) => {
    if(req.session.user){
        next()
    } else {
        res.redirect('/?err=' + 'Bukan User, silahkan Login terlebih dulu')
    }
})


router.use('/students', routerStudent)
router.use('/buddies', routerBuddy)
router.use('/challenges', routerChallenge)

module.exports = router