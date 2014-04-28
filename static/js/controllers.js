var timeApp = angular.module('timeApp', []);
 
timeApp.controller('TimeCtrl', function ($scope, $http) {
	$scope.loadData = function(){
		$http.get('api/v1/time').success(function(data) {
			$scope.timestamp = data.time;
		});
	}

	setInterval(function(){ $scope.loadData();}, 1000);
 	$scope.loadData();
});

