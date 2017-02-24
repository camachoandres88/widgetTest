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

    DashboardController.$inject = ['InfoService', '$translate'];

    function DashboardController(InfoService, $translate) {
        var vm = this;

        vm.dataProfileWidget = null;
        vm.dataStatisticsWidget = null;
        vm.dataNavWidget = null;
        vm.selectedLang = $translate.use();
        vm.activate = activate;
        vm.changeLanguage = changeLanguage;


        vm.activate();

        function activate() {
            InfoService.getInfo().then(function(result) {
                vm.dataProfileWidget = result.data.dataProfileWidget;
                vm.dataStatisticsWidget = result.data.dataStatisticsWidget;
                vm.dataNavWidget = result.data.dataNavWidget;
            });
        }

        function changeLanguage(langKey) {
            vm.selectedLang = langKey;
            $translate.use(vm.selectedLang);
        }
    }
})();
