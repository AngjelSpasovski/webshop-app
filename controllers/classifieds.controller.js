angular.module("ngClassifieds")

.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast){
	
	// call the service GET function
	classifiedsFactory.getClassifieds().then(function(classifieds){
		$scope.classifieds = classifieds.data;
	});

	var contact = {									// static contact object data that faking user profile info
		name:" Angjel Spasovski",
		phone:"222-333-555",
		email:"angjel.spasovski@yahoo.com"
	}

	// open side bar function 
	$scope.openSidebar = function(){
		$mdSidenav('left').open();					// open the slide nav
	}

	// close side bar function 
	$scope.closeSidebar = function(){
		$mdSidenav('left').close();					// close the slide nav
		$scope.classified = {};						// empty the fields
	}

	// save side bar function
	$scope.saveClassified = function(classified){
		if(classified){								// if is true (have data in object)
			classified.contact = contact;			// send values from static object
			$scope.classifieds.push(classified);	// push the data
			$scope.classified = {};					// empty the fields 
			$scope.closeSidebar();					// close the slide nav function
			// message
			$mdToast.show(
				$mdToast.simple()
						.content("Classified saved!")
						.position('top, right')
						.hideDelay(3000)
			);
		}
	}
 

	
});