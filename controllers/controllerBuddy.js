const { Buddy, Challenge, Student, StudentChallenge } = require('../models')

class BuddyController {
    static get(req, res) {
        Buddy.findAll({})
            .then(data => {
                res.render('./buddies/buddy', { buddies: data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addForm(req, res) {
        res.render('./buddies/addFormBuddy.ejs')
    }

    static addBuddy(req, res) {
        console.log(req.body);
        
        Buddy.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
        })
            .then(data => {
                res.redirect('/buddies')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editForm(req, res) {
        Buddy.findByPk(req.params.id, {})
            .then(data => {
                res.render('./buddies/editFormBuddy.ejs', { buddies: data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateBuddy(req, res) {
        console.log('req: ', req.body);
        let Buddy = req.body;
        Buddy.update({
            first_name: Buddy.first_name,
            last_name: Buddy.last_name,
            email: Buddy.email,
            gender: Buddy.gender
        }, {
            where: {
                id: Number(req.params.id)
            }
        })
            .then(data => {
                console.log('data: ', data.fullName());
                res.redirect('/buddies')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static dell(req, res) {
        Buddy.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.redirect('/buddies')
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = BuddyController