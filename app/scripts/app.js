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
            'widgetTestApp.modules',
            'widgetTestApp.directives',
            'widgetTestApp.services'
        ]);
})();
