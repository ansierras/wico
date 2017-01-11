'use strict';
 
angular.module('wicoApp.home', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
		url: '/',
		views:{
			'': {
				templateUrl:'partials/home/home.html',
			 	controller: 'homeCtrl'	},
			'header@home':{
				template:'header'},
			'sidebar@home':{
				template: 'sidebar',
				controller: 'home_sidebarCtrl'},
			'content@home': {
				template: 'content',
				controller: 'home_contentCtrl'}
		}
	})

}])



.controller('homeCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	
}])

.controller('home_sidebarCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.claseSide = 'col-md-3'
}])

.controller('home_contentCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.claseCont = 'col-md-9'
}])

