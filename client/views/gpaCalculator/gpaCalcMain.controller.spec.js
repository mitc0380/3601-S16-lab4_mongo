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
});