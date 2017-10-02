var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config([
  "$locationProvider",
  "$routeProvider",
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider.when("/", {
      templateUrl: "/tasks.html"
    });

    $routeProvider.when("/completed", {
      templateUrl: "/completed.html",
      controller: "mainController"
    });
  }
]);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  function($scope, $filter) {
    $scope.title = "ToDo App:";

    $scope.mylist = [];
    $scope.completed = [];

    $scope.addItem = function(e) {
      var item = $("input#todo").val();
      var details = $("textarea#details").val();
      var date = new Date();

      if (item === "") {
        e.preventDefault;
      } else {
        var task = {
          title: item,
          desc: details,
          time: date
        };
        $scope.mylist.push(task);
        console.log($scope.mylist);
        $("input, textarea").val("");
      }
    };

    $scope.removeItem = function(item) {
      var index = $scope.mylist.indexOf(item);
      item.time = new Date();
      $scope.completed.push(item);
      console.log($scope.completed);
      $scope.mylist.splice(index, 1);
    };
  }
]);
