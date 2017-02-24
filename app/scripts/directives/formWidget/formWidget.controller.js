(function() {
    'use strict';

    angular
        .module('widgetTestApp.directives.formWidget')
        .controller('FormWidgetController', FormWidgetController);

    FormWidgetController.$inject = ['$scope', '$translate'];

    function FormWidgetController($scope, $translate) {
        var vm = this;
        vm.pattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
        vm.submit = submit;
        vm.placeholderContact = $translate.instant('CONTACT_FORM_WIDGET.CONTACT_PLACEHOLDER');

        function submit() {
            $scope.$broadcast('$validate');
        }
    }
})();
