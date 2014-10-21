(function() {

  var app = angular.module('shoppingListApp', ['ngAnimate']);

  app.controller('ShoppingController' , ["$scope" ,function($scope) {

    $scope.items = items;
    $scope.newItem = false;

    $scope.addItem = function () {
      $scope.items.push({
        name: $scope.newItem.name,
        quantity: $scope.newItem.quantity,
        done: false
      });


        // this.todos.push({
        //     name: this.todoName,
        //     estimate: this.todoEstimate,
        //     done: false
        // });
      $scope.newItem = false;
      $scope.itemForm.$setPristine()      
    }

  }])

  items = [  
    {  
      name: "Shampoo",  
      quantity: 1,  
      done:  false 
    },  
    {  
      name: "Conditioner",  
      quantity: 2,  
      done: false  
    },  
    {
      name: "Toilet paper",  
      quantity: 6,  
      done: false 
    }  
  ]

})();