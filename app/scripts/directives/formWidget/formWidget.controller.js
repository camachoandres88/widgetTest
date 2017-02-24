(function() {
    'use strict';

    angular
        .module('widgetTestApp.directives.formWidget')
        .controller('FormWidgetController', FormWidgetController);

    FormWidgetController.$inject = ['$scope'];

    function FormWidgetController($scope) {
        var vm = this;
        vm.pattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
        vm.submit = submit;

        function submit() {
            $scope.$broadcast('$validate');
        }
    }
})();
