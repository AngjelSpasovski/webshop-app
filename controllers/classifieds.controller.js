angular.module("ngClassifieds")

.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
	
	// call the service GET function
	classifiedsFactory.getClassifieds().then(function(classifieds){
		$scope.classifieds = classifieds.data;
		$scope.categories = getCategories($scope.classifieds);
	});

	var contact = {														// static contact object data that faking user profile info
		name:" Angjel Spasovski",
		phone:"222-333-555",
		email:"angjel.spasovski@yahoo.com"
	}

	// open side bar function 
	$scope.openSidebar = function(){
		$mdSidenav('left').open();										// open the slide nav
	}

	// close side bar function 
	$scope.closeSidebar = function(){
		$mdSidenav('left').close();										// close the slide nav
		$scope.classified = {};											// empty the fields
	}

	// save side bar function
	$scope.saveClassified = function(classifiedData){
		if(classifiedData){												// if is true (have data in object)
			classifiedData.contact = contact;							// send values from static object
			$scope.classifieds.push(classifiedData);					// push the data
			$scope.classified = {};										// empty the fields 
			$scope.closeSidebar();										// close the slide nav function
			showToast("Classifieds saved!");	
		}
	}
 	
 	// edit values in side bar 
 	// and tuck the data from clicked area
 	$scope.editClassified = function(classifidForEditing){
 		$scope.editing = true;											// set value true for editing
 		$scope.openSidebar();											// open the side nav function
 		$scope.classified = classifidForEditing;						// the model get the edited value
 	}

 	// save the editing
 	$scope.saveEdit = function(){
 		$scope.editing = false;											// close the editing
 		$scope.classified = {};											// empty the fields 
 		$scope.closeSidebar();											// close the slide nav function
 		showToast("Edit classified!");
 	}

 	// delete the item
 	$scope.deleteClassified = function(event, classifiedForDelete){
 		var confirm = $mdDialog.confirm()
 								.title("Are you sure want to delete " + classifiedForDelete.title + " ?")
 								.ok("Yes")
 								.cancel("No")
 								.targetEvent(event);

 		// promise when the dialog is confirmed then to delete the item
 		$mdDialog.show(confirm).then(function(){
 			var index = $scope.classifieds.indexOf(classifiedForDelete);	// index gets the index from classifiedForDelete object
 			$scope.classifieds.splice(index, 1);							// pass the index and splice one item
 		}, function(){
 			console.log("you change your mind, thanks :) ");
 		});
 	}

 	// clear the searches
 	$scope.clearSearch = function(){
 		$scope.classifiedsFilter = "";
 		$scope.selectedCategory	= "";
 	}

	// global function for messaging 
	function showToast(message){
		$mdToast.show(
			$mdToast.simple()
					.content(message)
					.position('top, right')
					.hideDelay(3000)
		);
	}

	// global function for getting categories
	function getCategories(classifieds){
		// arrey
		var categories = [];

		// loops
		angular.forEach(classifieds, function(item){
			angular.forEach(item.categories, function(category){
				categories.push(category);
			});
		});

		// unique categories
		return _.uniq(categories);
	}
});