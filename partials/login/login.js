'use strict';
 
angular.module('wicoApp.login', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('login', {
		url: '/login',
		views:{
			'': {
				templateUrl:'partials/home/home.html',
			 	controller: 'homeCtrl'	},
			'header@login':{
				templateUrl:'partials/header/header.html'},
			'sidebar@login':{
				template: 'sidebar login',
				controller: 'login_sidebarCtrl'},
			'content@login': {
				template: 'content login',
				controller: 'login_contentCtrl'}
		}
	})

}])



.controller('login_sidebarCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.claseSide = 'side-hidden'	
}])
.controller('login_contentCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.claseCont = 'col-md-12'	
}])

