/* jshint ignore:start */
 (function () { 
 "use strict"; 
 angular.module('widgetTestApp.templates', []).run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/dashboard/dashboard.template.html',
    "<div class=\"container\"> <div class=\"content\"> <div class=\"row\"> <div class=\"col-sm-6 col-md-4\"> <profile-widget widget-data=\"dashboardCtrl.dataProfileWidget\"></profile-widget> </div> <div class=\"col-sm-6 col-md-4\"> <statistics-widget widget-data=\"dashboardCtrl.dataStatisticsWidget\"></statistics-widget> </div> <div class=\"col-sm-6 col-md-4\"> <contact-form-widget></contact-form-widget> </div> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('formWidget/formWidget.template.html',
    "<div class=\"form-widget-container\"> <form name=\"formWidgetCtrl.contactForm\" novalidate> <div class=\"form-body\"> <div class=\"form-contacts\"> <label translate-once=\"CONTACT_FORM_WIDGET.CONTACT\"></label> <tags-input name=\"emails\" ng-model=\"formWidgetCtrl.emails\" min-tags=\"1\" allowed-tags-pattern=\"{{formWidgetCtrl.pattern}}\" placeholder=\"{{'CONTACT_FORM_WIDGET.CONTACT_PLACEHOLDER'| translate}}\"></tags-input> <div ng-if=\"formWidgetCtrl.contactForm.$submitted\" ng-messages=\"formWidgetCtrl.contactForm.emails.$error\"> <div ng-message=\"minTags\" class=\"error\" translate-once=\"CONTACT_FORM_WIDGET.ERROR.CONTACT\"></div> </div> </div> <div class=\"form-subject\"> <label translate-once=\"CONTACT_FORM_WIDGET.SUBJECT\"></label> <input type=\"text\" name=\"subject\" ng-model=\"formWidgetCtrl.subject\" translate-once-placeholder=\"CONTACT_FORM_WIDGET.SUBJECT_PLACEHOLDER\" required> <div ng-if=\"formWidgetCtrl.contactForm.$submitted || formWidgetCtrl.contactForm.subject.$dirty\" ng-messages=\"formWidgetCtrl.contactForm.subject.$error\"> <div ng-message=\"required\" class=\"error\" translate-once=\"CONTACT_FORM_WIDGET.ERROR.SUBJECT\"></div> </div> </div> <div class=\"form-message\"> <label translate-once=\"CONTACT_FORM_WIDGET.MESSAGE\"></label> <textarea rows=\"4\" name=\"message\" ng-model=\"formWidgetCtrl.message\" translate-once-placeholder=\"CONTACT_FORM_WIDGET.MESSAGE_PLACEHOLDER\" required></textarea> <div ng-if=\"formWidgetCtrl.contactForm.$submitted || formWidgetCtrl.contactForm.message.$dirty\" ng-messages=\"formWidgetCtrl.contactForm.message.$error\"> <div ng-message=\"required\" class=\"error\" translate-once=\"CONTACT_FORM_WIDGET.ERROR.MESSAGE\"></div> </div> </div> </div> <div class=\"form-footer\"> <div class=\"save-copy\"> <div class=\"custom-check\"> <input type=\"checkbox\" value=\"None\" id=\"saveCheck\" name=\"check\" checked> <label for=\"saveCheck\"></label> </div> <label class=\"label-check\" translate-once=\"CONTACT_FORM_WIDGET.SAVE_A_COPY\"></label> </div> <div class=\"send-mail\"> <button type=\"submit\" value=\"Submit\"> <i class=\"glyphicon glyphicon-ok-sign\" aria-hidden=\"true\"></i> <span translate-once=\"CONTACT_FORM_WIDGET.SEND_MAIL\"></span> </button> </div> </div> </form> </div>"
  );


  $templateCache.put('profileWidget/profileWidget.template.html',
    "<div class=\"profile-widget-container\"> <div class=\"profile-header\"> <div class=\"header-image\"> <img ng-src=\"{{profileWidgetCtrl.widgetData.headerImage}}\" alt=\"profile-image\"> </div> </div> <div class=\"profile-body\"> <div class=\"profile-image\"> <img ng-src=\"{{profileWidgetCtrl.widgetData.profileImage}}\" alt=\"profile-image\"> </div> <div class=\"profile-content\"> <h5>{{profileWidgetCtrl.widgetData.name}}</h5> <p>{{profileWidgetCtrl.widgetData.desription}}</p> </div> </div> <div class=\"profile-footer\"> <ul> <li> <a><i class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></i>{{profileWidgetCtrl.widgetData.rates.views}}</a> </li> <li> <a><i class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></i>{{profileWidgetCtrl.widgetData.rates.likes}}</a> </li> <li> <a><i class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></i>{{profileWidgetCtrl.widgetData.rates.comments}}</a> </li> </ul> </div> </div>"
  );


  $templateCache.put('statisticsWidget/statisticsWidget.template.html',
    "<div class=\"statistics-widget-container\"> <div class=\"statistics-header\"> <div class=\"statistics-header-superior\"> <h3><i class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></i>{{statisticsWidgetCtrl.widgetData.total}}</h3> <h5>{{statisticsWidgetCtrl.widgetData.pointsUp}}</h5> </div> <div class=\"statistics-header-inferior\"> <span sparklines=\"statisticsWidgetCtrl.widgetData.barsGraph.options\" data-data=\"statisticsWidgetCtrl.widgetData.barsGraph.data\"></span> </div> <div class=\"statistics-header-absolute\"> <span sparklines=\"statisticsWidgetCtrl.widgetData.lineGraph.options\" values=\"{{statisticsWidgetCtrl.widgetData.lineGraph.data}}\"></span> </div> </div> <div class=\"statistics-body\"> <h6 class=\"statistics-time\">{{statisticsWidgetCtrl.widgetData.date}}</h6> <h4 class=\"statistics-location\">{{statisticsWidgetCtrl.widgetData.location}}</h4> <ul> <li> <strong>{{statisticsWidgetCtrl.widgetData.sharedTraded}}</strong> <span translate-once=\"STATISTICS_WIDGET.SHARES_TRADED\"></span> </li> <li> <strong>{{statisticsWidgetCtrl.widgetData.marketCap}}</strong> <span translate-once=\"STATISTICS_WIDGET.MARKET_CAP\"></span> </li> </ul> <div class=\"statistics-bottom\"> <div class=\"statistics-bottom-graph\"> <h5 translate-once=\"STATISTICS_WIDGET.AAPL\"></h5> <div class=\"statistics-graph-container\"> <span sparklines=\"statisticsWidgetCtrl.widgetData.redBarsGraph.options\" values=\"{{statisticsWidgetCtrl.widgetData.redBarsGraph.data}}\"></span> <span sparklines=\"statisticsWidgetCtrl.widgetData.greenBarsGraph.options\" values=\"{{statisticsWidgetCtrl.widgetData.greenBarsGraph.data}}\"></span> </div> </div> <div class=\"statistics-bottom-number\"> <h5 translate-once=\"STATISTICS_WIDGET.YEARLY_CHANGE\"></h5> <span>{{statisticsWidgetCtrl.widgetData.yearlyChange}}</span> </div> </div> </div> </div>"
  );
}]) 
})();
 /* jshint ignore:end */