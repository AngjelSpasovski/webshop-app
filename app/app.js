angular.module('ngClassifieds', ['ngMaterial','ui.router'])


.config(function($mdThemingProvider, $stateProvider){
	
	// theme change with $mdThemeProvider
	$mdThemingProvider
		.theme('default')
		.primaryPalette('teal')
		.accentPalette('orange');

	// 
	$stateProvider
	.state('classifieds', {
		url: '/classifieds'
		, templateUrl: 'templates/classifieds.template.html'
		, controller: 'classifiedsCtrl as vm'
	})
	.state('classifieds.new', {
		url: '/new'
		, templateUrl: 'templates/classifieds.new.template.html'
		, controller: 'newClassifiedsCtrl as vm'
	})
	.state('classifieds.edit', {
		url: '/edit' // /:id
		, templateUrl: 'templates/classifieds.edit.template.html'
		, controller: 'editClassifiedsCtrl'
		/*, params: {	classifieds: null }*/
	})
})