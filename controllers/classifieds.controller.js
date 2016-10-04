angular.module("ngClassifieds")

.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory){
	
	/*
		POST	- sending data
		GET		- retrive data
		PUT		- editing data
		DELETE	- deleting datas
	*/
	classifiedsFactory.getClassifieds().then(function(classifieds){
		
		console.log(classifieds);
		
		$scope.classifieds = classifieds.data;

		console.log(classifieds.data[0]);
	});

	
});