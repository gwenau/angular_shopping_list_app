
(function() {

  var app = angular.module('shoppingListApp', ['ngAnimate']);

  app.controller('ShoppingController' , ["$scope" ,function($scope) {

    $scope.items = [];
    $scope.item = false;

    $scope.addItem = function () {

    var id = $scope.items.length + 1;
      
      $scope.items.push({
        id: id,
        name: $scope.item.name,
        quantity: $scope.item.quantity,
        done: false
      });
      $scope.item = false;
      $scope.itemForm.$setPristine();      
    }

    $scope.removeItem = function (item) {
      $scope.remove($scope.items, item)
    }

    $scope.remove = function (arr, item) {
      for (var i = 0, l = arr.length; i < l; i++) {
          if (arr[i] === item) {
              arr.splice(i, 1);
          }
      }
    }

    $scope.editItem = function (item){
      $scope.item = item;
      $scope.saveButton = true;
    }

    $scope.update = function (item){
      $scope.saveButton = false;
      $scope.item = false;
      $scope.itemForm.$setPristine(); 
    }

  }])

})();