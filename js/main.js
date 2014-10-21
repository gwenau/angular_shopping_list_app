(function() {

  var app = angular.module('shoppingListApp', ['ngAnimate']);

  app.controller('ShoppingController' , ["$scope" ,function($scope) {

    $scope.items = items;

    

  }])

  items = [  
    {  
      name: "Shampoo",  
      price: 1,  
      done:  false 
    },  
    {  
      name: "Conditioner",  
      price: 2,  
      done: false  
    },  
    {
      name: "Toilet paper",  
      price: 6,  
      description: false 
    }  
  ]

})();