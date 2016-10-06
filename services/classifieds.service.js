angular.module("ngClassifieds")

.factory("classifiedsFactory", function($http){
	
	/*
		POST	- sending data
		GET		- retrive data
		PUT		- editing data
		DELETE	- deleting datas
	*/
	
	function getClassifieds(){
		return $http.get("data/classifieds.json");
	}

	return {
		getClassifieds : getClassifieds
	}
});