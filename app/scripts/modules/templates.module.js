/* jshint ignore:start */
 (function () { 
 "use strict"; 
 angular.module('widgetTestApp.templates', []).run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/dashboard/dashboard.template.html',
    "<div class=\"container\"> <div class=\"content\"> <div class=\"row\"> <div class=\"col-sm-4\"> <profile-widget></profile-widget> </div> <div class=\"col-sm-4\"></div> <div class=\"col-sm-4\"></div> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('profileWidget/profileWidget.template.html',
    "<div class=\"profile-widget-container\"> <div class=\"profile-header\"> <div class=\"header-image\"> <img src=\"http://pixelkit.com/demo/html/metro-vibes/metro-vibes-css/images/temp/avatar-image.jpg\" alt=\"profile-image\"> </div> </div> <div class=\"profile-body\"> <div class=\"profile-image\"> <img src=\"http://pixelkit.com/demo/html/metro-vibes/metro-vibes-css/images/temp/avatar.png\" alt=\"profile-image\"> </div> <div class=\"profile-content\"> <h5>John Raymons</h5> <p>Your talent amazes! This is awesome. Excited to see the final product.</p> </div> </div> <div class=\"profile-footer\"> <ul> <li> <a><i class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></i>172</a> </li> <li> <a><i class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></i>34</a> </li> <li> <a><i class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></i>210</a> </li> </ul> </div> </div>"
  );
}]) 
})();
 /* jshint ignore:end */