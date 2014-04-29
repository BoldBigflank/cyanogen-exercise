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

timeControllers.controller('WidgetsCtrl', ['$scope', "Widget", function($scope, Widget){
	$scope.widgets = Widget.query();
	$scope.widgetName = "";
	$scope.networkActivity = false;

	$scope.addWidget = function() {
		$scope.networkActivity = true;
		

		Widget.create({widget:$scope.widgetName}, function() {
			console.log("Done!")
			$scope.widgets = Widget.query(function(){
				console.log("Done Again!")
			});
			$scope.networkActivity = false;

	    	// $timeout(function() { 
	    	// 	console.log("Complete"); //$location.path('/'); 
	    	// });
	    });
		// $scope.widgets.push($scope.widgetName)
		$scope.widgetName = "";
	}
}]);