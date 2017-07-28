(function() {

    'use strict';

    /*
    Service for getting predefined information from the ergast API
    Available from app.core
    */

    angular
        .module('app.core')
        .factory('dataService', dataService);

    /* @ngInject */
    function dataService($http, $q, $log, appConfig) {

        var service = {
            getSeasonWinners: getSeasonWinners,
            getRacesBySeason: getRacesBySeason
        };

        return service;

        ////////////////


        /*

        Retrieve the seasonal winner from 2005 through 2015

        Expects: Nothing
        Returns: unformated collection from the public API

        */

        function getSeasonWinners() {

            // Parameters offset and limit are predetermined to match expected results of 2005 through 2015
            var _seasonUrl = appConfig.DATA_API.URL + '/f1/driverstandings/1.json?offset=55&limit=11';

            return $http({
                method: appConfig.DATA_API.DEFAULT_METHOD,
                url: _seasonUrl,
                cache: true
            }).then(function success(response) {
                return response.data.MRData;
            }, function error(response) {
                return $q.reject('No valid API call to ' + response.config.url);
            });

        }

        /*

        Retrieve the races for a season

        Expects: Season as string/number between 1952 and 2015
        Returns: unformated collection from the public API

        */

        function getRacesBySeason(seasonYear) {

            var _seasonYear = parseInt(seasonYear);

            if (angular.isNumber(_seasonYear) && _seasonYear >= 1952 && _seasonYear <= 2015) {

                return $http({
                    method: appConfig.DATA_API.DEFAULT_METHOD,
                    url: appConfig.DATA_API.URL + '/f1/' + _seasonYear + '/results.json?limit=500',
                    cache: true
                }).then(function success(response) {
                    return response.data.MRData;
                }, function error(response) {
                    return $q.reject('No valid API call to ' + response.config.url);
                });

            }

            return $q.reject('No valid year specified: ' + seasonYear);
        }



    }

})();