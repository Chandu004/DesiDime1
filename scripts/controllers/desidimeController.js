var desidimeApp=angular.module('desidimeApp',['ui.router']);
desidimeApp.controller('desidimeController',function($scope){
    
})

desidimeApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/deals');                         
    $stateProvider  
   .state('/categories',{
        url:'/categories',
        templateUrl:'views/categories.html'
    })
   .state('/coupons',{
        url:'/coupons',
        templateUrl:'views/coupons.html'
    })
   .state('/deals',{
        url:'/deals',
        templateUrl:'views/deals.html',
        controller:'dealsController'
    })
   .state('/price_comparision',{
        url:'/price_comparision',
        templateUrl:'views/price_comparision.html'
    })
   .state('/forums',{
        url:'/forums',
        templateUrl:'views/forums.html'
    });
});

