angular.module("ngClassifieds")

.controller("classifiedsCtrl", function($scope){
	
	$scope.classifieds = [

		{
			"id":"1",
			"title":"Some title 1",
			"description":"Some description longer than title",
			"price":6000,
			"posted":"26.09.2016",
			"contact": {
				"name":"Angjel Spasovski",
				"phone":"(078) 384-653",
				"email":"angjel.spasovski@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"images/dell.jpg",
			"view":213
			
		},
		{
			"id":"2",
			"title":"Some title 2",
			"description":"Some description longer than title",
			"price":6000,
			"posted":"26.09.2016",
			"contact": {
				"name":"Pero Burgija",
				"phone":"(078) 334-653",
				"email":"pero.burgija@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"images/dell.jpg",
			"view":276
			
		},
		{
			"id":"3",
			"title":"Some title 3",
			"description":"Some description longer than title",
			"price":6000,
			"posted":"26.09.2016",
			"contact": {
				"name":"Ibe Palikukja",
				"phone":"(078) 312-653",
				"email":"ibe.palikukja@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"images/ibe.jpg",
			"view":2234
			
		},
		{
			"id":"4",
			"title":"Some title",
			"description":"Some description longer than title",
			"price":6000,
			"posted":"26.09.2016",
			"contact": {
				"name":"Angjel Spasovski",
				"phone":"(078) 384-653",
				"email":"angjel.spasovski@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"images/hp.jpg",
			"view":213
			
		},
		{
			"id":"5",
			"title":"Some title",
			"description":"Some description longer than title",
			"price":6000,
			"posted":"26.09.2016",
			"contact": {
				"name":"Angjel Spasovski",
				"phone":"(078) 384-653",
				"email":"angjel.spasovski@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"images/lenovo.jpg",
			"view":213
			
		},
		{
			"id":"6",
			"title":"Some title",
			"description":"Some description longer than title",
			"price":6000,
			"posted":"26.09.2016",
			"contact": {
				"name":"Angjel Spasovski",
				"phone":"(078) 384-653",
				"email":"angjel.spasovski@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"images/dell.jpg",
			"view":213
			
		},
		{
			"id":"7",
			"title":"Some title",
			"description":"Some description longer than title",
			"price":6000,
			"posted":"26.09.2016",
			"contact": {
				"name":"Angjel Spasovski",
				"phone":"(078) 384-653",
				"email":"angjel.spasovski@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"images/ibe.jpg",
			"view":213
			
		}
	]
});