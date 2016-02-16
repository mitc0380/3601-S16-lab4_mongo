/**
 * Created by mitc0380 on 2/13/16.
 */
'use strict';

angular.module('appModule')
    .controller('gpaCalcCtrl', function($http){
        //text fields for class, the class's credits and the class's grade
        var self = this;

        self.classNames = "";
        self.classCredits = "";
        self.classGrades = "";

        //array where classes are stored
        //initialized as empty
        self.gpadata = [

        ];

        //adds classes, credits and grade to the list gpadata so long as all fields have something in them and are not in error
        self.addClasses = function(){
            if((self.classNames.length >= 1) && (self.classCredits.length >= 1) && (self.classGrades.length >= 1) && !(isErrorCredits(self.classCredits))) {
                self.gpadata.push({Class: self.classNames, Credits: self.classCredits, Grade: self.classGrades});
                self.classNames = "";
                self.classCredits = "";
                self.classGrades = "";
            }
        };


        //takes in the three grades and their respective credit hours and returns GPA
        self.calculateGPA = function(){
            var qualityPoints = 0;
            var totalCredits = 0;
            var i = 0;
            for(i = 0; i < self.gpadata.length; i++){
                qualityPoints = qualityPoints + (parseInt(self.gpadata[i].Credits) * gradeToNumber(self.gpadata[i].Grade));
                totalCredits = totalCredits + parseInt(self.gpadata[i].Credits);
            }


            return Math.round(qualityPoints/totalCredits * 100)/100;

        };

        //determines if fields credits and grades are in error, if so, returns an error message to be displayed
        self.returnError = function(){
            if(isErrorCredits(self.classCredits) && isErrorGrades(self.classGrades)){
                return "Not a number and not a valid grade.";
            }
            else if(isErrorGrades(self.classGrades)){
                return "Not a valid grade.";
            }
            else if(isErrorCredits(self.classCredits)){
                return "Not a number.";
            }
        };

    });