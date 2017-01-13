'use strict';
 
angular.module('wicoApp.editProf', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('editProf', {
		url: '/editprofile',
		views:{
			'': {
				templateUrl:'partials/home/home.html',
			 	controller: 'homeCtrl'	},
			'header@editProf':{
				templateUrl:'partials/header/header.html',
				controller: 'editProf_contentCtrl'},
			'sidebar@editProf':{
				template: 'sidebar login',
				controller: 'editProf_sidebarCtrl'},
			'content@editProf': {
				templateUrl: 'partials/editProf/editprof.html',
				controller: 'editProf_contentCtrl'}
		}
	})

}])



.controller('editProf_sidebarCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.claseSide = 'side-hidden'	
}])
.controller('editProf_contentCtrl', ['$scope','$state','$rootScope', function($scope, $state, $rootScope) {
	$scope.loggedIn = true;
	$scope.claseCont = 'col-md-12'	
	$scope.titulo = "Crear Perfil"
	$scope.textoBoton = "Crear"
	$scope.disponibilidad = 5;
	$scope.servicios = [];
	$('.nav-tabs li a').click(function (e) {
	  	e.preventDefault()
	  	$(this).tab('show')
	})

	$scope.agregar = function(tipo){
		console.log($scope.servicios)
		switch(tipo){
			case "servicio":
				$scope.servicios.push($scope.nuevoServicio);
				break;
		}
	}
	$scope.cambiarHoras = function(cantidad){
		var resultado = $scope.disponibilidad + cantidad
		if (resultado > -1 && resultado<21) {
			$scope.disponibilidad = resultado
		};
		
	}

}])

