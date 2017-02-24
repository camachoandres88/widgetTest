(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name widgetTestApp.services:InfoService
     * @description
     * # InfoService
     * Service to emulate a rest consumption
     */

    angular
        .module('widgetTestApp.services')
        .factory('InfoService', InfoService);

    InfoService.$inject = ['$http'];

    function InfoService($http) {

        var service = {
            getInfo: getInfo
        };

        return service;

        function getInfo() {
            return $http.get('/assets/info/info.json');
        }


    }
})();
