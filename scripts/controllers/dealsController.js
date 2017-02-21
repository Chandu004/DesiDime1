desidimeApp.controller('dealsController',function($scope,$http){
     $scope.message='From Deals Controller';
     $http.get('./data/deal.json').then(function(response){
         $scope.deals=response.data;
     })
});
                       
//                       
//
//$http({
//  method: 'GET',
//  url: '/data/deals.json'
//}).then(function successCallback(response) {
//    // this callback will be called asynchronously
//    // when the response is available
//  }, function errorCallback(response) {
//    // called asynchronously if an error occurs
//    // or server returns response with an error status.
//  });