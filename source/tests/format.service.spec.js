'use strict';

describe('formatService', function() {

    var formatService;

    beforeEach(function() {
        module('app.core');
    });

    beforeEach(inject(function(_formatService_) {
        formatService = _formatService_;
    }));

    describe('formatSeasonWinners', function() {

        var mockData;
        beforeEach(inject(function() {

            mockData = [{
                'season': '1950',
                'round': '7',
                'DriverStandings': [{
                    'Driver': {
                        'driverId': 'farina',
                        'givenName': 'Nino',
                        'familyName': 'Farina',
                        'nationality': 'Italian'
                    },
                    'Constructors': [{
                        'name': 'Alfa Romeo'
                    }]
                }]
            }];
        }));


        it('should return an array', function() {

            // Target the first occurence of the mockData
            var formattedData = formatService.formatSeasonWinners(mockData);
            expect(_.isArray(formattedData)).toBeTruthy();

        });

        it('should return these properties', function() {

            // Target the first occurence of the mockData
            var formattedData = formatService.formatSeasonWinners(mockData)[0];

            var props = [
                'season',
                'round',
                'driverId',
                'fullName',
                'nationality',
                'constructorName'
            ];

            props.forEach(function(prop) {
                expect(_.has(formattedData, prop)).toBeTruthy();
            });

        });

    });

    describe('formatRacesBySeason', function() {

        var mockData;
        beforeEach(inject(function() {

            mockData = [{
                'round': '1',
                'raceName': 'Australian Grand Prix',
                'Circuit': {
                    'circuitName': 'Albert Park Grand Prix Circuit',
                    'Location': {
                        'locality': 'Melbourne',
                        'country': 'Australia'
                    }
                },
                'Results': [{
                        'position': '1',
                        'Driver': {
                            'driverId': 'fisichella',
                            'givenName': 'Giancarlo',
                            'familyName': 'Fisichella',
                        }
                    },
                    {
                        'number': '2',
                        'Driver': {
                            'driverId': 'barrichello',
                            'givenName': 'Rubens',
                            'familyName': 'Barrichello',
                        }
                    }
                ]
            }];
        }));


        it('should return an array', function() {

            // Target the first occurence of the mockData
            var formattedData = formatService.formatRacesBySeason(mockData);
            expect(_.isArray(formattedData)).toBeTruthy();

        });

        it('should return these properties', function() {

            // Target the first occurence of the mockData
            var formattedData = formatService.formatRacesBySeason(mockData)[0];

            var props = [
                'raceName',
                'round',
                'circuitName',
                'circuitLocation',
                'winner',
                'isSeasonalWinner'
            ];

            props.forEach(function(prop) {
                expect(_.has(formattedData, prop)).toBeTruthy();
            });

        });
    });

});