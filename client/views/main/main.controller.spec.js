'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it("testing getHeaviestPet", function(){
        var data = [];
        expect(mainCtrl.getHeaviestPet(data)).toBe("no pets in database");
    });

    it("testing getHeaviestPet", function(){
        var data = [{"text":"Tom","weight":15,"_id":"56c4b3781735fc2e7cf4a092","__v":0}, {"text":"bob","weight":2,"_id":"56c4b1fa5db4bac6769b60c5","__v":0},{"text":"Sally","weight":60,"_id":"56c4babf2988e664047871ab","__v":0}];
        expect(mainCtrl.getHeaviestPet(data).weight).toEqual(60);
    });

    it("testing getHeaviestPet", function(){
        var data = [{"text":"bob","weight":2,"_id":"56c4b1fa5db4bac6769b60c5","__v":0},{"text":"Sally","weight":60,"_id":"56c4babf2988e664047871ab","__v":0}];
        expect(mainCtrl.getHeaviestPet(data).text).toBe("Sally");
    });

});
