(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name widgetTestApp.directives.formWidget:formWidget
     * @description
     * # formWidget
     * Directive to create a profile widget
     */

    angular
        .module('widgetTestApp.directives.formWidget')
        .directive('contactFormWidget', contactFormWidget);

    contactFormWidget.$inject = ['$templateCache'];

    function contactFormWidget($templateCache) {
        var directive = {
            restrict: 'E',
            template: $templateCache.get('formWidget/formWidget.template.html'),
            scope: {
                inputData: '='
            },
            controller: 'FormWidgetController',
            bindToController: true,
            controllerAs: 'formWidgetCtrl'
        };

        return directive;
    }
})();
