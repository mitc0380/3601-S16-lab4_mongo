'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: gpaCalcMainCtrl', function() {

    // load the controller's module
    beforeEach(module('appModule'));

    var gpaCalcMainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCalcMainCtrl = $controller('gpaCalcMainCtrl', {
            $scope: scope
        });
    }));

    it("testing calculator: multiple grades", function(){
        var data = [{"class":"Math","credit":3,"letter":"A","_id":"56c4de359151241b16c9f6b4","__v":0},{"class":"asdf","credit":1,"letter":"B","_id":"56c4de469151241b16c9f6b5","__v":0}];
        expect(gpaCalcMainCtrl.calculateGPA(data)).toEqual(3.75);
    });

    it("testing calculator: one grade", function(){
        var data = [{"class":"asdf","credit":1,"letter":"B","_id":"56c4de469151241b16c9f6b5","__v":0}];
        expect(gpaCalcMainCtrl.calculateGPA(data)).toEqual(3.00);
    });

    it("testing calculator: empty", function(){
        var data = [];
        expect(isNaN((gpaCalcMainCtrl.calculateGPA(data)))).toBe(true);
    });

});