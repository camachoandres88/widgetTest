(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name widgetTestApp
     * @description
     * # widgetTestApp
     *
     * Main module of the application.
     */

    angular
        .module('widgetTestApp', [
            'ui.router',
            'ngSanitize',
            'pascalprecht.translate',
            'widgetTestApp.modules',
            'widgetTestApp.directives',
            'widgetTestApp.services'
        ]);
})();
