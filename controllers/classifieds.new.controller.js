angular.module("ngClassifieds")

.controller("newClassifiedsCtrl", function($scope, $mdSidenav, $state, $mdDialog, $timeout, classifiedsFactory){
	var vm = this;

	vm.closeSidebar = closeSidebar;
	vm.sidenavOpen;

	$timeout(function(){
		$mdSidenav('left').open(); 
	});

	$scope.$watch("vm.sidenavOpen", function(value){
		if(value === false){
			$mdSidenav('left').close().then(function(){
				$state.go('classifieds');
			});
		}
	});

	function closeSidebar(){
		vm.sidenavOpen = false;
	}
	
})