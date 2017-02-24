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

    DashboardController.$inject = [];

    function DashboardController() {
        var vm = this;
        vm.dataProfileWidget = {
            name: 'John Raymons',
            desription: 'Your talent amazes! This is awesome. Excited to see the final product.',
            rates: { views: 172, likes: 34, comments: 210 },
            headerImage: 'http://pixelkit.com/demo/html/metro-vibes/metro-vibes-css/images/temp/avatar-image.jpg',
            profileImage: 'http://pixelkit.com/demo/html/metro-vibes/metro-vibes-css/images/temp/avatar.png'

        };
        vm.dataStatisticsWidget = {
            total: '634.39',
            pointsUp: '+2.18 (3.71%)',
            barsGraph: {
                data: [5, 6, 3, 9, 2, 7, 5, 7, 1, 8, 0, 3, 5, 6, 9, 1, 1, 8, 0, 3, 5, 6, 9, 1, 9, 3, 5, 6, 3, 9, 2, 7, 5, 7, 1, 8, 0, 3, 5, 6, 9, 1, 1, 8, 0, 3, 5, 6, 9, 1, 9, 3],
                options: {
                    type: 'bar',
                    width: '100%',
                    height: '80',
                    barWidth: 7,
                    barColor: '#3d9e68',
                    barSpacing: 7
                }
            },
            lineGraph: {
                data: '-12,1,3,7,5,4,7,15,9,5,8,22,6,4,16',
                options: {
                    width: '100%',
                    height: '90',
                    lineColor: '#ffffff',
                    fillColor: false,
                    lineWidth: 3,
                    spotColor: false,
                    minSpotColor: false,
                    maxSpotColor: false,
                    highlightLineColor: '#ffffff'
                }
            },
            date: 'Today 2:25 pm',
            location: 'Salt Lake City, Utah',
            sharedTraded: '13.5 M',
            marketCap: '28.44 B',
            redBarsGraph: {
                data: '7:3,5:5,3:7,9:1',
                options: {
                    type: 'bar',
                    height: '35',
                    barWidth: 10,
                    barSpacing: 6,
                    stackedBarColor: ['#e05033', '#f6f0ec']
                }
            },
            greenBarsGraph: {
                data: '7:3,5:5,3:7,9:1',
                options: {
                    type: 'bar',
                    height: '35',
                    barWidth: 10,
                    barSpacing: 6,
                    stackedBarColor: ['#4daf7b', '#f6f0ec']
                }
            },
            yearlyChange: '+ 127.01'
        };
    }
})();
