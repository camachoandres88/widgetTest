(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name widgetTestApp.directives
     * @description
     * # Modules
     * Module to manage statistics widget on the app
     */

    angular
        .module('widgetTestApp.directives.statisticsWidget', [
            'widgetTestApp.directives.charts',
            'pascalprecht.translate'
        ]);
})();
