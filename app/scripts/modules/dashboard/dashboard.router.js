(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name widgetTestApp.modules.analytics:DashboardRouter
     * @description
     * # DashboardRouter
     * Main router for Analytics module
     */

    angular
        .module('widgetTestApp.modules.dashboard')
        .config(DashboardRouter);

    DashboardRouter.$inject = ['$stateProvider'];

    function DashboardRouter($stateProvider) {
        $stateProvider
            .state('dashboard_main', {
                url: '/dashboard',
                templateUrl: '/views/dashboard/dashboard.template.html',
                controller: 'DashboardController',
                controllerAs: 'dashboardCtrl',
            })
    }
})();
