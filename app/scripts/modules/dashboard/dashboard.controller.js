(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name widgetTestApp.modules.analytics:DashboardController
     * @description
     * # DashboardController
     * Controller that supports all the logic to display the widgets
     */

    angular
        .module('widgetTestApp.modules.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];

    function DashboardController() {
        var vm = this;
    }
})();
