angular.module('myAppHome', ['myHomeService'])
.controller('homeCtrl',['$scope','$rootScope','homeDataService','$mdSidenav',function($scope,$rootScope,homeDataService,$mdSidenav){
	homeDataService.list(function(awards){
		$scope.awards = awards;
		console.log($scope.awards);
	});
	$rootScope.openResults = function(){
		$mdSidenav('results').toggle();
	};
	$scope.votes = [];
	$scope.addVote = function(title, choice){
		$scope.votes.push(title +": "+ choice);
		// console.log(scope.votes);
		return $scope.votes;
	};
}]);
