angular.module('ngClassifieds', ['ngMaterial'])


.directive("helloWorld", function(){
	return {
		template: "<h1>{{ messages.first }}</h1>"
	}
})