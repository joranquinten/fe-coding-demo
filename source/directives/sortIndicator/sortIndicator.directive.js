(function () {

    'use strict';

    angular
        .module('app.sortIndicator', [])
        .directive('sortIndicator', sortIndicator)
        .controller('sortIndicatorController', sortIndicatorController);

    /* @ngInject */
    function sortIndicator() {

        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                activeSort: '=',
                fieldName: '@'
            },
            controller: 'sortIndicatorController as vm',
            templateUrl: 'directives/sortIndicator/sortIndicator.html'
        };

        return directive;

    }

    /* @ngInject */
    function sortIndicatorController($scope) {

        var vm = this;

        vm.activeSort = $scope.activeSort;
        vm.fieldName = $scope.fieldName;

    }

})();