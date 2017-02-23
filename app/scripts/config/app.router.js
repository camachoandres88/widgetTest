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

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    }
})();
