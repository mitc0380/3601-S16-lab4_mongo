'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var Course = mongoose.model('Course', {
    class: String,
    credit: Number,
    letter: String
});

// Defining Routes
// =====================================================

exports.index = function(req, res) {
    Course.find(function (err, courses) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(courses); // return results
        }
    });
};

exports.create = function(req, res) {
    Course.create(req.body, function (err, course) {
        if (err) {
            res.send(err);
        } else {
            Course.find(function (err, courses) {
                if (err) {
                    res.send(err);
                }

                res.json(courses);
            });
        }
    });
};

exports.destroy = function(req, res) {
    Course.findById(req.params.course_id, function(err, course){
        if(err) { res.send(err); return "error: " + err; }
        if(!course) { return res.sendStatus(404); }

        course.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};