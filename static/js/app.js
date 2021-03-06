var timeApp = angular.module('timeApp', ['ngRoute', 'timeControllers', 'widgetServices'])
 
.config(
	function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
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
	})

