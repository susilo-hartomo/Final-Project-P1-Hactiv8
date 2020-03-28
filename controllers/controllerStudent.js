const { Buddy, Challenge, Student, StudentChallenge } = require('../models')

class StudentsController {
    static get(req, res) {
        Student.findAll({ include: Buddy })
            .then(data => {
                res.render('./students/student', { students: data })
                // res.send('ini di student')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addForm(req, res) {
        Buddy.findAll()
            .then(buddy => {
                res.render('./students/addFormStudent.ejs', { buddies: buddy })
            })
            .catch(err => {

            })
    }

    static addStudent(req, res) {
        let newStudent = req.body;
        Student.create({
            first_name: newStudent.first_name,
            last_name: newStudent.last_name,
            email: newStudent.email,
            gender: newStudent.gender,
            birth_date: newStudent.birth_date,
            BuddyId: newStudent.BuddyId
        })
            .then(data => {
                // console.log('Data :', data.fullName());
                res.redirect('/students')
            })
            .catch(err => {
                res.send(err)
            })
    }
    

    static editForm(req, res) {
        Buddy.findAll()
            .then(buddy => {
                Student.findByPk(req.params.id)
                    .then(data => {
                        res.render('./students/editFormStudent.ejs', { students: data, buddies: buddy })
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateStudent(req, res) {
        let newStudent = req.body;
        Student.update({
            first_name: newStudent.first_name,
            last_name: newStudent.last_name,
            email: newStudent.email,
            gender: newStudent.gender,
            birth_date: newStudent.birth_date,
            BuddyId: newStudent.BuddyId
        }, {
            where: {
                id: Number(req.params.id)
            }
        })
            .then(data => {
                // console.log('data: ', data.fullName());
                res.redirect('/students')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static dell(req, res) {
        Student.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.redirect('/students')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static challenge(req, res){
        Challenge.findAll()
            .then(challenge => {
                Student.findByPk(req.params.id, { include: Challenge })
                    .then(students => {
                        res.render('./students/studentChallenge', { challenge, students })
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static challengeList(req, res){
        StudentChallenge.create({
            ChallengeId: req.body.ChallengeId,
            StudentId: req.params.id,
            status: false
        })
            .then(data => {
                res.redirect(`/students/challenges/${req.params.id}`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = StudentsController