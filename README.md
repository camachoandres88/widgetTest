The demo can be found at:

http://widgetexamples.azurewebsites.net/

I chose the first three widgets because I thought they were the most complex and with more opportunity to show me as a Front End Developer.
I chose the last widget because due to work commitments I was over the time to finalize the test.

---- Application Layers -----

The application was developed with AngularJS 1 and Sass as a preprocessor of
CSS. I designed the application in such a way that it would work with an MVC architecture, adding to it a layer of components or directives:

a. Services: All objects and/or classes that allow the manipulation and consumption of data. In our case all the objects and/or classes are under the path '/app/scripts/services', this is where the json is consumed to paint the widgets.

b. View: All html files that generate a visual representation to the user. They are under the path '/app/views'

c. Controller: All objects and/or classes that connect the view with the services and vice versa. In our case they were created under a modular structure inside the path '/app/scripts/modules'.

d. Components or directives: All objects and/or classes oriented to work together as a component, reusable in any part of the application, 'state-less' and with independent operation of any module or service. In our case they were created under the path '/app/scripts/directives. For this case all the widget were hosted here.

The application was grouped into the following subfolders to facilitate the automation of grunt tasks such as: syntax revision, minification, compression, union of files of similar type, renamed (to avoid caching problems in the browser), generation of production files and publication.

a. Images : Png, jpg o gif files.
b. Scripts: Javascript files.
c. Styles: CSS, SCSS or font files.
d. Views: HTML files.
e. Assets : Json files to translate or load info on the widgets.

The packages used by grunt for the automation of the tasks described above were installed through Npm and were hosted in the folder "node_modules". The packages necessary for the operation of the application were installed through Bower and were hosted in the folder "bower_components".

I used the JSON drive strategy for translations.

The platform was published in the azure cloud.

NOTE: The application was developed with ES5 because several of the packages I use in conjunction with grunt still do not support ES6.


---- Responsibility for each class created ------

The responsibility for each one of the created classes is defined in the documentation of each class within the code. I rely on the ngDocs standard for such documentation.
