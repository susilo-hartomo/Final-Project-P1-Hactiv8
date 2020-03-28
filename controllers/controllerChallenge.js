const { Challenge } = require('../models/')

class ControllerChallenge {

    static findAll(req, res){
        Challenge.findAll({
            order: [['id', 'asc']] // UNTUK ORDER KECIL KE BESAR
        }) 
            .then(data => {
                if (req.query.success){
                    res.render('challenge', { data: data, success: req.query.success })
                } else {
                    res.render('challenge', { data: data, success: null })
                }
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }


    static createForm(req, res){
        Challenge.findAll()
            .then(challenge => {
                res.render('./challenges/addFormChallenge', { challenge })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static createChallenge(req, res){
        if (req.body.name == '' || req.body.name == undefined){
            res.redirect('/challenges/add?error=' + 'Challenge Name harus diisi')
        }  else {
            Challenge.create({
                name: req.body.name,
                deadline: req.body.deadline
            })
                .then(data => {
                    res.redirect('/challenges/add')
                })
                .catch(err => {
                    console.log(err);
                    res.send(err)
                })
        }
    }

    static updateForm(req, res){
        Challenge.findByPk(req.params.id) // GA PERLU PAKE BUNGKUS OBJECT
            .then(data => {
                res.render('challengeEdit', { data })
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

    static updateChallenge(req, res){
        Challenge.update({
            name: req.body.name
        },{
            where: { id: req.params.id }
        })
            .then(data => {
                res.redirect('/challenges?success=' + 'Suksess mengupdate Data')
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

    static deleteChallenge(req, res){
        Challenge.destroy({
            where: { id: Number(req.params.id) }
        })
            .then(data => {
                res.redirect('/challenges')
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }


}

module.exports = ControllerChallenge
