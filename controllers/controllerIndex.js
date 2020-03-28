const { User } = require('../models/index')
const { Op } = require('sequelize')

class ControllerIndex {

    static login(req, res){
        User.findOne({
            where: { 
                [Op.and]: [
                    { username: req.body.username },
                    { password: req.body.password }
                ]
            }
        })
            .then(data => {
                if(data){
                    req.session.user = data.username
                    res.redirect('/?success=' + 'Berhasil Login')
                } else {
                    res.redirect('/?err=' + 'Username tidak terdaftar')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res){
        req.session.destroy(err =>{
            if(err){
                res.send(err)
            } else {
                res.redirect('/?success=' + 'Anda sudah Logout')
            }
        })
    }
}

module.exports = ControllerIndex