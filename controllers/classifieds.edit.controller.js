angular.module("ngClassifieds")

.controller("editClassifiedsCtrl", function($scope, $mdSidenav, $state, $mdDialog, $timeout){
	var vm = this;

	vm.closeSidebar = closeSidebar;
	vm.saveEdit = saveEdit;
	vm.sidenavOpen;
	vm.classified = $state.params.classified;

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
	
	function saveEdit(){
		$scope.$emit("editSaved", "Edit Saved!");
		vm.sidenavOpen = false;
	}
})