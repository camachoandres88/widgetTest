(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name widgetTestApp.services:ChartService
     * @description
     * # ChartService
     * Service to emulate a rest consumption
     */

    angular
        .module('widgetTestApp.services')
        .factory('ChartService', ChartService);

    ChartService.$inject = [];

    function ChartService() {

        var service = {
        };

        return service;


    }
})();
