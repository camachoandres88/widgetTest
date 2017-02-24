(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name widgetTestApp.directives.navWidget:navWidget
     * @description
     * # navWidget
     * Directive to create a profile widget
     */

    angular
        .module('widgetTestApp.directives.navWidget')
        .directive('navigationWidget', navigationWidget);

    navigationWidget.$inject = ['$templateCache'];

    function navigationWidget($templateCache) {
        var directive = {
            restrict: 'E',
            template: $templateCache.get('navWidget/navWidget.template.html'),
            scope: {
                widgetData: '='
            },
            controller: 'NavWidgetController',
            bindToController: true,
            controllerAs: 'navWidgetCtrl'
        };

        return directive;
    }
})();
