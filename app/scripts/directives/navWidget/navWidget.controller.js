(function() {
    'use strict';

    angular
        .module('widgetTestApp.directives.navWidget')
        .controller('NavWidgetController', NavWidgetController);

    NavWidgetController.$inject = [];

    function NavWidgetController() {
        var vm = this;
        vm.setSelected = setSelected;

        function setSelected(item) {
            vm.widgetData.itemSelected = item.id;
        }
    }
})();
