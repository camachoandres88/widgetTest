(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name widgetTestApp.directives.profileWidget:profileWidget
     * @description
     * # profileWidget
     * Directive to create a profile widget
     */

    angular
        .module('widgetTestApp.directives.profileWidget')
        .directive('profileWidget', profileWidget);

    profileWidget.$inject = ['$templateCache'];

    function profileWidget($templateCache) {
        var directive = {
            restrict: 'E',
            template: $templateCache.get('profileWidget/profileWidget.template.html'),
            scope: {
                inputData: '='
            },
            controller: 'ProfileWidgetController',
            bindToController: true,
            controllerAs: 'profileWidgetCtrl'
        };

        return directive;
    }
})();
