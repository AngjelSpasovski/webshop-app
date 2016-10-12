angular.module("ngClassifieds")

.controller("newClassifiedsCtrl", function($scope, $mdSidenav, $state, $mdDialog, $timeout, classifiedsFactory){
	var vm = this;

	vm.closeSidebar = closeSidebar;
	vm.saveClassified = saveClassified;
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
	
	function saveClassified(classified){
		if(classified){
			classified.contact = {														// static contact object data that faking user profile info
				name:" Angjel Spasovski",
				phone:"222-333-555",
				email:"angjel.spasovski@yahoo.com"
			}

			$scope.$emit("newClassified", classified);
			vm.sidenavOpen = false;
		}
	}
})