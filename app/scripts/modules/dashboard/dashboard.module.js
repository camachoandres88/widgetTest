(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name widgetTestApp.modules.analytics
     * @description
     * # AnalyticsModule
     * Module to manage the app analytics
     */

    angular
        .module('widgetTestApp.modules.dashboard', [
            'widgetTestApp.directives.profileWidget',
            'widgetTestApp.directives.statisticsWidget'
        ]);
})();
