(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name widgetTestApp.directives.statisticsWidget:statisticsWidget
     * @description
     * # statisticsWidget
     * Directive to create a profile widget
     */

    angular
        .module('widgetTestApp.directives.statisticsWidget')
        .directive('statisticsWidget', statisticsWidget);

    statisticsWidget.$inject = ['$templateCache'];

    function statisticsWidget($templateCache) {
        var directive = {
            restrict: 'E',
            template: $templateCache.get('statisticsWidget/statisticsWidget.template.html'),
            scope: {
                inputData: '='
            },
            controller: 'StatisticsWidgetController',
            bindToController: true,
            controllerAs: 'statisticsWidgetCtrl'
        };

        return directive;
    }
})();
