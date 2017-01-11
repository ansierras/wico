'use strict';
 
angular.module('wicoApp.register', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('register', {
		url: '/register',
		views:{
			'': {
				templateUrl:'partials/home/home.html',
			 	controller: 'homeCtrl'	},
			'header@register':{
				templateUrl:'partials/header/header.html',
				controller: 'register_contentCtrl'},
			'sidebar@register':{
				template: 'sidebar register',
				controller: 'register_sidebarCtrl'},
			'content@register': {
				templateUrl: 'partials/register/register.html',
				controller: 'register_contentCtrl'}
		}
	})

}])



.controller('register_sidebarCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.claseSide = 'side-hidden'	
}])
.controller('register_contentCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.claseCont = 'col-md-12'	
	$scope.accionTxt = "Log In"

}])

