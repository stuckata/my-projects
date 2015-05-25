"use strict";

var app = angular.module('CalculatorApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
		templateUrl: 'partials/public/calculator.html',
		controller: 'CalculatorController'
	});
});