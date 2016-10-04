angular.module("ngClassifieds")

.controller("classifiedsCtrl", function($scope, $http){
	
	/*
		POST	- sending data
		GET		- retrive data
		PUT		- editing data
		DELETE	- deleting datas
	*/
	$http.get("data/classifieds.json").then(function(classifieds){
		
		console.log(classifieds);
		
		$scope.classifieds = classifieds.data;

		console.log(classifieds.data[0]);
	});

	
});