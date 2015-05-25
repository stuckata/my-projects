"use strict";

app.factory('configService', function ($scope) {

	function addElement(element, array) {

		return array.push(element);
	}

	function deleteElement(array, index) {

		var DELETE_COUNT = 1;
		return array.splice(index, DELETE_COUNT);
	}
	
	function calculatePrice(array) {
		
		var totalPrice = 0;
		for (var element in array){
			totalPrice += element.price;
		}
		return totalPrice;
	}

	return {
		addElement: addElement,
		deleteElement: deleteElement,
		calculatePrice: calculatePrice
	};
});