(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name widgetTestApp.modules
     * @description
     * # Modules
     * Module to manage sub modules on the app
     */

    angular
        .module('widgetTestApp.modules', [
            'widgetTestApp.modules.dashboard',
            'widgetTestApp.templates'
        ]);
})();
