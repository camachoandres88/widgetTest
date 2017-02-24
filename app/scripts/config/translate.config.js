(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name widgetTestApp:translateConfig
     * @description
     * # RouterConfig
     * Main router for widgetTestApp
     */
    angular
        .module('widgetTestApp')
        .config(translateConfig);

    translateConfig.$inject = ['$translateProvider'];

    function translateConfig($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/assets/translate/',
            suffix: '.json'
        });

        $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
            'en_*': 'en',
            'es_*': 'es'
        });
        $translateProvider.fallbackLanguage(['en', 'es']);
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.determinePreferredLanguage();
    }
})();
