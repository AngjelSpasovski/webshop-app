angular.module("ngClassifieds")

.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav){
	
	/*
		POST	- sending data
		GET		- retrive data
		PUT		- editing data
		DELETE	- deleting datas
	*/
	classifiedsFactory.getClassifieds().then(function(classifieds){
		$scope.classifieds = classifieds.data;
	});

	// open side bar function 
	$scope.openSidebar = function(){
		$mdSidenav('left').open();
	}

	// open side bar function 
	$scope.closeSidebar = function(){
		$mdSidenav('left').close();
	}
 

	
});