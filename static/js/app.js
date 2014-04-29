var timeApp = angular.module('timeApp', ['ngRoute', 'timeControllers'])
 
.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
			when('/time', {
				templateUrl: 'partials/time.html',
				controller: 'TimeCtrl'
			}).
			when('/widgets', {
				templateUrl: 'partials/widgets.html',
				controller: 'WidgetsCtrl'
			}).
			otherwise({
				redirectTo: '/time'
			})
	}])