angular.module("ngClassifieds")

.controller("classifiedsCtrl", function($scope, $http, $state, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
	
	var vm = this;
	vm.openSidebar = openSidebar;
	vm.closeSidebar = closeSidebar;
	vm.saveClassified = saveClassified;
	vm.editClassified = editClassified;
	vm.saveEdit = saveEdit;
	vm.deleteClassified = deleteClassified;

	vm.classifieds;
	vm.categories;
	vm.editing;
	vm.classified;

	// call the service GET function
	classifiedsFactory.getClassifieds().then(function(classifieds){
		vm.classifieds = classifieds.data;
		vm.categories = getCategories(vm.classifieds);
	});

	// whow the emiting object from child controller
	$scope.$on("newClassified", function(event, classified){
		classified.id = vm.classifieds.length + 1;
		vm.classifieds.push(classified);
		showToast("Classified Saved!");
	})

	$scope.$on("editSaved", function(event, message){
		showToast(message);
	})

	var contact = {														// static contact object data that faking user profile info
		name:" Angjel Spasovski",
		phone:"222-333-555",
		email:"angjel.spasovski@yahoo.com"
	}

	// open side bar
	function openSidebar(){
		$state.go('classifieds.new');									// navigate to the URI classifieds/new state
	}

	// close side bar function 
	function closeSidebar(){
		$mdSidenav('left').close();										// close the slide nav
		vm.classified = {};											// empty the fields
	}

	// save side bar function
	function saveClassified(classifiedData){
		if(classifiedData){												// if is true (have data in object)
			classifiedData.contact = contact;							// send values from static object
			vm.classifieds.push(classifiedData);					// push the data
			vm.classified = {};										// empty the fields 
			closeSidebar();										// close the slide nav function
			showToast("Classifieds saved!");	
		}
	}
 	
 	// open side bar
 	function editClassified(classifiedData){
 		$state.go('classifieds.edit', {						// navigate to the URI classifieds/edit state
 			id: classifiedData.id,								// with URL paremeters
 			classified: classifiedData						// pass throug classified object on edit click
 		});													

 	}

 	// save the editing
 	function saveEdit(){
 		vm.editing = false;											// close the editing
 		vm.classified = {};											// empty the fields 
 		closeSidebar();											// close the slide nav function
 		showToast("Edit classified!");
 	}

 	// delete the item
 	function deleteClassified(event, classifiedForDelete){
 		var confirm = $mdDialog.confirm()
 								.title("Are you sure want to delete " + classifiedForDelete.title + " ?")
 								.ok("Yes")
 								.cancel("No")
 								.targetEvent(event);

 		// promise when the dialog is confirmed then to delete the item
 		$mdDialog.show(confirm).then(function(){
 			var index = vm.classifieds.indexOf(classifiedForDelete);	// index gets the index from classifiedForDelete object
 			vm.classifieds.splice(index, 1);							// pass the index and splice one item
 		}, function(){
 			console.log("you change your mind, thanks :) ");
 		});
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