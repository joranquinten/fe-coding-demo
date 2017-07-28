'use strict';

describe('General routing', function() {

    // Based on: https://github.com/nikaspran/example-ui-router-testing/blob/master/app/js/routing.spec.js

    var $state, $stateParams, $q, $templateCache, $location, $rootScope, $injector;

    function mockTemplate(templateRoute, tmpl) {
        $templateCache.put(templateRoute, tmpl || templateRoute);
    }

    function goFrom(url) {
        return {
            toState: function(state, params) {
                $location.replace().url(url); //Don't actually trigger a reload
                $state.go(state, params);
                $rootScope.$digest();
            }
        };
    }

    function getViewDefinition(state, view) {
        return view ? $state.get(state).views[view] : $state.get(state);
    }

    beforeEach(function() {
        // Include all modules available through UI router
        module('app.core', 'app.home');
    });

    beforeEach(inject(function(_$state_, _$stateParams_, _$q_, _$templateCache_, _$location_, _$rootScope_, _$injector_) {
        $state = _$state_;
        $stateParams = _$stateParams_;
        $q = _$q_;
        $templateCache = _$templateCache_;
        $location = _$location_;
        $rootScope = _$rootScope_;
        $injector = _$injector_;
    }));

    describe('path', function() {

        function goTo(url) {
            $location.url(url);
            $rootScope.$digest();
        }

        describe('when empty', function() {
            beforeEach(function() {
                mockTemplate('modules/home/home.html');
            });

            it('should go to the home state', function() {
                goTo('');
                expect($state.current.name).toEqual('home');
            });
        });

        describe('when /home', function() {
            beforeEach(function() {
                mockTemplate('modules/home/home.html');
            });

            it('should go to the home state', function() {
                goTo('home');
                expect($state.current.name).toEqual('home');
            });
        });
        /* 
                describe('otherwise', function() {
                    beforeEach(function() {
                        mockTemplate('modules/notfound/notfound.html');
                    });

                    var badUrl = 'someNonExistentUrl';

                    it('should go to the 404 state', function() {
                        goTo(badUrl);
                        expect($state.current.name).toEqual('notfound');
                    });

                    it('should not change the url', function() {
                        goTo('/' + badUrl);
                        expect($location.url()).toEqual('/' + badUrl);
                    });
                });
         */
    });

});