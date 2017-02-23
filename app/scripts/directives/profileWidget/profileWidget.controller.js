(function() {
    'use strict';

    angular
        .module('widgetTestApp.directives.profileWidget')
        .controller('ProfileWidgetController', ProfileWidgetController);

    ProfileWidgetController.$inject = [];

    function ProfileWidgetController() {
        var vm = this;
    }
})();
