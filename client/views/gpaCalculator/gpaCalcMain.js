/**
 * Created by mitc0380 on 2/13/16.
 */
'use strict';

console.log("gpaCalcMain.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('gpaCalc', {
                url: '/gpaCalc',
                templateUrl: 'views/gpaCalculator/gpaCalcMain.html',
                controller: 'gpaCalcCtrl'

            });
    });