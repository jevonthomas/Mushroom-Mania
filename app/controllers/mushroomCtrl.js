"use strict";


mushroomApp.controller("mushroomCtrl", function($scope, MushroomFactory) {
	MushroomFactory.getMushrooms()
	.then( (mushroomsData) => {
		$scope.mushroomList = mushroomsData.data.mushrooms;
	});
});

