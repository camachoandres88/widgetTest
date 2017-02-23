(function() {
    'use strict';

    angular
        .module('widgetTestApp.directives.statisticsWidget')
        .controller('StatisticsWidgetController', StatisticsWidgetController);

    StatisticsWidgetController.$inject = [];

    function StatisticsWidgetController() {
        var vm = this;
    }
})();
