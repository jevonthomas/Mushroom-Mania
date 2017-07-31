"use strict";

mushroomApp.factory("MushroomFactory", function($q, $http) {
	function getMushrooms() {
		return $q( (resolve, reject) => {
			$http.get("./data/mushrooms.json")
			.then( (mushrooms) => {
				resolve(mushrooms);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}
	return { getMushrooms };
});