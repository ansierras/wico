'use strict';
var wicoApp = angular.module('wicoApp', [
    'ui.router',
    //'firebase',
    //'angular-media-preview',
    'wicoApp.home',
    'wicoApp.login']);

wicoApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
        
});



