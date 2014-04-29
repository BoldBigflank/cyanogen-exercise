var widgetServices = angular.module('widgetServices', ['ngResource']);
 
widgetServices.factory('Widget', ['$resource',
  function($resource){
    return $resource('api/v1/widget', {}, {
      query: {method:'GET', params:{}, isArray:true},
      create: { method:'POST' }
    });
  }]);