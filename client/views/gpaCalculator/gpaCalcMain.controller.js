/**
 * Created by mitc0380 on 2/13/16.
 */
'use strict';

angular.module('appModule')
    .controller('gpaCalcMainCtrl', function($http){
        //text fields for class, the class's credits and the class's grade
        var self = this;

        self.classNames = "";
        self.classCredits = "";
        self.classGrades = "";

        //array where classes are stored
        //initialized as empty
        self.gpadata = [];

        self.getCourses = function () {
            $http.get('api/GPA').success(function (courses) {
                self.gpadata = courses;
            });
        };

        self.getCourses();

        //adds classes, credits and grade to the list gpadata so long as all fields have something in them and are not in error
        self.addCourses = function(){
            if((self.classNames.length >= 1) && (self.classCredits.length >= 1) && (self.classGrades.length >= 1) && !(isErrorCredits(self.classCredits))) {
                $http.post('api/GPA', {class: self.classNames, credit: self.classCredits, letter: self.classGrades}).success(function () {
                    self.getCourses();
                });
                self.classNames = "";
                self.classCredits = "";
                self.classGrades = "";
            }
        };

        self.removeCourses = function (index) {
            $http.delete('/api/GPA/' + self.gpadata[index]._id).success(function () {
                self.getCourses();
            });
        };


        //takes in the three grades and their respective credit hours and returns GPA
        self.calculateGPA = function(){
            var qualityPoints = 0;
            var totalCredits = 0;
            var i = 0;
            for(i = 0; i < self.gpadata.length; i++){
                qualityPoints = qualityPoints + (parseInt(self.gpadata[i].credit) * self.gradeToNumber(self.gpadata[i].letter));
                totalCredits = totalCredits + parseInt(self.gpadata[i].credit);
            }


            return Math.round(qualityPoints/totalCredits * 100)/100;

        };

        self.itemsInList = function () {
            return self.gpadata.length;
        };

        //determines if fields credits and grades are in error, if so, returns an error message to be displayed
        self.returnError = function(){
            if(self.isErrorCredits(self.classCredits) && self.isErrorGrades(self.classGrades)){
                return "Not a number and not a valid grade.";
            }
            else if(self.isErrorGrades(self.classGrades)){
                return "Not a valid grade.";
            }
            else if(self.isErrorCredits(self.classCredits)){
                return "Not a number.";
            }
        };
        self.gradeToNumber = function(gr){
            if(gr == "A")
            {
                return 4.0;
            }
            if(gr == "B")
            {
                return 3.0;
            }
            if(gr == "C")
            {
                return 2.0;
            }
            if(gr == "D")
            {
                return 1.0;
            }
            if(gr == "F")
            {
                return 0.0;
            }

        };

        self.isErrorCredits = function(cr) {
            if (Number(cr) == cr) {
                return false;
            }
            return true;
        };

//determines if grade entry is in error, if it is returns true, if it is not returns false
        self.isErrorGrades = function(gr) {
            if ((gr == "A") || (gr == "B") || (gr == "C") || (gr == "D") || (gr == "F") || (gr == "")) {
                return false;

            }
            return true;
        };

    });