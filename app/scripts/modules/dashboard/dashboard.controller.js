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

    DashboardController.$inject = ['InfoService'];

    function DashboardController(InfoService) {
        var vm = this;

        vm.dataProfileWidget = null;
        vm.dataStatisticsWidget = null;
        vm.dataNavWidget = null;
        vm.activate = activate;

        vm.activate();

        function activate() {
            InfoService.getInfo().then(function(result) {
                vm.dataProfileWidget = result.data.dataProfileWidget;
                vm.dataStatisticsWidget = result.data.dataStatisticsWidget;
                vm.dataNavWidget = result.data.dataNavWidget;
            });
        }
    }
})();
