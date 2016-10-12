angular.module("ngClassifieds")

.controller("newClassifiedsCtrl", function($scope, $mdSidenav, $mdDialog, $timeout, classifiedsFactory){
	var vm = this;

	$timeout(function(){
		$mdSidenav('left').open(); 
	});
	
})