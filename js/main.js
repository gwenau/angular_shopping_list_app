(function() {

  var app = angular.module('shoppingListApp', ['ngAnimate']);

  app.controller('ShoppingController' , ["$scope" ,function($scope) {

    $scope.items = [];
    $scope.newItem = false;

    $scope.addItem = function () {

    var id = $scope.items.length + 1;

      $scope.items.push({
        id: id,
        name: $scope.newItem.name,
        quantity: $scope.newItem.quantity,
        done: false
      });
      $scope.newItem = false;
      $scope.itemForm.$setPristine()      
    }

    $scope.removeItem = function (item) {
      // $scope.items.delete(item)
      console.log(item);
      console.log($scope)
      remove($scope.items, item)
    }

    function remove(arr, item) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
      // var i = 0, is the start, l = arr.length, determining the length of an array without hard coding it in.
      // i < l, the conditions to run the loop
      // i++ an increment method to signal what to do next in the loop. 
      for (var i = 0, l = arr.length; i < l; i++) {
          if (arr[i] === item) {
              arr.splice(i, 1);
              // As soon as the function has been complete, break stops the irration but if you want to delete multiple items, take this out. 
              break;
          }
      }
    }

    $scope.editItem = function (item){
      console.log(item);
      $scope.edit = true;
    }

    $scope.update = function (item){
      console.log("update", item)

      $scope.edit = false;
    }

  }])

})();