(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name widgetTestApp:RouterConfig
     * @description
     * # RouterConfig
     * Main router for widgetTestApp
     */

    angular
        .module('widgetTestApp')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
})();
