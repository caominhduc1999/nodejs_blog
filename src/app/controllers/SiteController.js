const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /home
    index(req, res) {
        Course.find({})
            .then(courses => {
                courses = multipleMongooseToObject(courses);
                res.render('home', {
                    courses: courses,
                })
            })
    }

    // [GET] /search
    search() {
        res.render("search");
    }
}

module.exports = new SiteController();
