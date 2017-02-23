/* jshint ignore:start */
 (function () { 
 "use strict"; 
 angular.module('widgetTestApp.templates', []).run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/dashboard/dashboard.template.html',
    "<div class=\"container\"> <div class=\"content\"> <div class=\"row\"> <div class=\"col-sm-6 col-md-4\"> <profile-widget></profile-widget> </div> <div class=\"col-sm-6 col-md-4\"> <statistics-widget></statistics-widget> </div> <div class=\"col-sm-6 col-md-4\"></div> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('profileWidget/profileWidget.template.html',
    "<div class=\"profile-widget-container\"> <div class=\"profile-header\"> <div class=\"header-image\"> <img src=\"http://pixelkit.com/demo/html/metro-vibes/metro-vibes-css/images/temp/avatar-image.jpg\" alt=\"profile-image\"> </div> </div> <div class=\"profile-body\"> <div class=\"profile-image\"> <img src=\"http://pixelkit.com/demo/html/metro-vibes/metro-vibes-css/images/temp/avatar.png\" alt=\"profile-image\"> </div> <div class=\"profile-content\"> <h5>John Raymons</h5> <p>Your talent amazes! This is awesome. Excited to see the final product.</p> </div> </div> <div class=\"profile-footer\"> <ul> <li> <a><i class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></i>172</a> </li> <li> <a><i class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></i>34</a> </li> <li> <a><i class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></i>210</a> </li> </ul> </div> </div>"
  );


  $templateCache.put('statisticsWidget/statisticsWidget.template.html',
    "<div class=\"statistics-widget-container\"> <div class=\"statistics-header\"> <div class=\"statistics-header-superior\"> <h3><i class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></i>634.39</h3> <h5>+2.18 (3.71%)</h5> </div> <div class=\"statistics-header-inferior\"> <span sparklines=\"{type: 'bar', width:'100%',height: '80', barWidth: 7,barColor: '#3d9e68',\n" +
    "    barSpacing: 7}\" data-data=\"[5,6,3,9,2,7,5,7,1,8,0,3,5,6,9,1,1,8,0,3,5,6,9,1,9,3,5,6,3,9,2,7,5,7,1,8,0,3,5,6,9,1,1,8,0,3,5,6,9,1,9,3]\"></span> </div> <div class=\"statistics-header-absolute\"> <span sparklines=\"{width:'100%',height: '90',lineColor: '#ffffff', fillColor: false, lineWidth: 3, spotColor: false ,minSpotColor: false,\n" +
    "    maxSpotColor: false, highlightLineColor : '#ffffff'}\" values=\"-12,1,3,7,5,4,7,15,9,5,8,22,6,4,16\"></span> </div> </div> <div class=\"statistics-body\"> <h6 class=\"statistics-time\">Today 2:25 pm</h6> <h4 class=\"statistics-location\">Salt Lake City, Utah</h4> <ul> <li> <strong>13.5 M</strong> <span>Shares Traded</span> </li> <li> <strong>28.44 B</strong> <span>Market Cap</span> </li> </ul> <div class=\"statistics-bottom\"> <div class=\"statistics-bottom-graph\"> <h5>AAPL</h5> <div class=\"statistics-graph-container\"> <span sparklines=\"{type: 'bar',height: '35',barWidth: 10, barSpacing: 6,stackedBarColor: ['#e05033','#f6f0ec']}\" values=\"7:3,5:5,3:7,9:1\"></span> <span sparklines=\"{type: 'bar',height: '35',barWidth: 10, barSpacing: 6,stackedBarColor: ['#4daf7b','#f6f0ec']}\" values=\"7:3,5:5,3:7,9:1\"></span> </div> </div> <div class=\"statistics-bottom-number\"> <h5>Yearly Change</h5> <span>+ 127.01</span> </div> </div> </div> </div>"
  );
}]) 
})();
 /* jshint ignore:end */