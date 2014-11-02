(function() {

  var app = angular.module('shoppingListApp', []);

  app.controller('ShoppingController' , ["$scope", function($scope) {

    $scope.items = [];
    $scope.item = false;
    $scope.total = 0;

    $scope.totalAll = function () {
      var totalNumber = 0;
      for(var i=0; i<$scope.items.length; i++){
        totalNumber = totalNumber + $scope.items[i].quantity;
      };
      return totalNumber
    }

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
      $scope.total = $scope.totalAll();
    }

    $scope.removeItem = function (item) {
      $scope.remove($scope.items, item);
      $scope.total = $scope.total - item.quantity;
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