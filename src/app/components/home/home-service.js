angular.module('myHomeService', [])
.factory('homeDataService',['$http',function($http){
	return {
          list: function(callback){
            $http.get('./assets/data/data.json').success(callback);
          }
        };
}]);
