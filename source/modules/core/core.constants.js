(function() {

    'use strict';

    /*
    Register constants to be used throughout the app
    */

    angular
        .module('app.core')
        .constant('appConfig', {
            'APP_NAME': 'Frontend AngularJS Coding Demo',
            'DEFAULT_PAGE': 'home',
            'DATA_API': {
                'DEFAULT_METHOD': 'GET',
                'URL': 'http://ergast.com/api'
            }
        });

})();