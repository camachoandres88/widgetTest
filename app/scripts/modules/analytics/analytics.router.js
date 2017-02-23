(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name widgetTestApp.modules.analytics:AnalyticsRouter
     * @description
     * # AnalyticsRouter
     * Main router for Analytics module
     */

    angular
        .module('widgetTestApp.modules.analytics')
        .config(AnalyticsRouter);

    AnalyticsRouter.$inject = ['$stateProvider'];

    function AnalyticsRouter($stateProvider) {
        $stateProvider
            .state('analytics_main', {
                url: '/analytics',
                templateUrl: '/views/analytics/analytics.template.html',
                controller: 'AnalyticsController',
                controllerAs: 'analyticsCtrl',
            })
    }
})();
