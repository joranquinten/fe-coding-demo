'use strict';

describe('dataService', function() {

    var dataService, appConfig, httpBackend;

    beforeEach(function() {
        module('app.core');
    });

    beforeEach(inject(function(_dataService_, _appConfig_, _$httpBackend_) {
        dataService = _dataService_;
        appConfig = _appConfig_;
        httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('getSeasonWinners', function() {

        var mockData;

        beforeEach(inject(function() {
            mockData = {
                MRData: {
                    series: 'f1',
                    RaceTable: {
                        season: '2005',
                        Races: [{
                            season: '2005',
                            round: '1',
                            raceName: 'Australian Grand Prix',
                            Circuit: {},
                            Results: []
                        }]
                    }
                }
            };

            var url = appConfig.DATA_API.URL + '/f1/driverstandings/1.json?offset=55&limit=11';
            httpBackend.whenGET(url).respond(mockData);

        }));

        it('should return an object', function() {

            dataService.getSeasonWinners().then(function(response) {
                expect(_.isObject(response)).toBeTruthy();
            });
            httpBackend.flush();

        });

        it('should return at least these properties', function() {

            dataService.getSeasonWinners().then(function(response) {
                var props = [
                    'series',
                    'RaceTable'
                ];

                props.forEach(function(prop) {
                    expect(_.has(response, prop)).toBeTruthy();
                });

            });
            httpBackend.flush();

        });

    });

    describe('getRacesBySeason', function() {

        var mockData, seasonYear;

        beforeEach(inject(function() {
            mockData = {

                MRData: {
                    series: 'f1',
                    RaceTable: {
                        Races: [{
                            'season': '2005'
                        }]
                    }
                }

            };

            seasonYear = 2005;
            var url = appConfig.DATA_API.URL + '/f1/' + seasonYear + '/results.json?limit=500';
            httpBackend.whenGET(url).respond(mockData);

        }));

        it('should return an object', function() {

            dataService.getRacesBySeason(seasonYear).then(function(response) {
                expect(_.isObject(response)).toBeTruthy();
            });
            httpBackend.flush();

        });

        it('should return at least these properties', function() {

            dataService.getRacesBySeason(seasonYear).then(function(response) {

                var props = [
                    'series',
                    'RaceTable'
                ];

                props.forEach(function(prop) {
                    expect(_.has(response, prop)).toBeTruthy();
                });

            });
            httpBackend.flush();

        });

        it('should return an array of races', function() {
            dataService.getRacesBySeason(seasonYear).then(function(response) {
                expect(_.isArray(response.RaceTable.Races)).toBeTruthy();
            });
            httpBackend.flush();
        });
    });

});