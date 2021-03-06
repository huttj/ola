var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		// controller: 'ProductsController',
		controller: 'HomeController',
		// controllerAs: 'productsCtrl',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/frontpage.partial.html'
	})

	.when('/ourstory', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/ourstory.partial.html'
	})
	.when('/wedding_events', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/wedding_events.partial.html'
	})
	.when('/hotels2', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/hotels2.partial.html'
	})
	.when('/registry', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/registry.partial.html'
	})
	.when('/rsvp', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/rsvp.partial.html'
	})
	.when('/hidden', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/hidden.partial.html'
	})
	.when('/thursday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/thursday.partial.html'
	})
	.when('/sports', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/sports.partial.html'
	})
	.when('/mariners', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/mariners.partial.html'
	})
	.when('/huskies', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/huskies.partial.html'
	})
	.when('/friday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/friday.partial.html'
	})
	.when('/saturday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/saturday.partial.html'
	})
	.when('/explore_seattle', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/explore_seattle.partial.html'
	})
	.when('/water_taxi', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/water_taxi.partial.html'
	})
	.when('/discovery', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/discovery.partial.html'
	})
	.when('/sunday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/sunday.partial.html'
	})
	.when('/maps', {
		controller: 'MapsController',
		controllerAs: 'mapsCtrl',
		templateUrl: '/partials/maps2.partial.html'
	})


});