var timeControllers = angular.module('timeControllers', []);

timeControllers.controller('TimeCtrl', function ($scope, $http) {
	$scope.name = "Alex";
	$scope.loadData = function(){
		$http.get('/api/v1/time').success(function(data) {
			$scope.timestamp = data.string;
		});
	}

	setInterval(function(){ $scope.loadData();}, 1000);
 	$scope.loadData();
});

timeControllers.controller('WidgetsCtrl', function($scope, $http){
	$http.get('/api/v1/widgets').success(function(data){
		$scope.widgets = data.widgets
	})


})