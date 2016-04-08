(function() {
  angular.module("PortfolioApp", [])

  .factory("Projects", ["$http", function($http) {
    return $http.get("https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/projects.json")
      .success(function(data) {
        return data;
      })
      .error(function(error) {
        return error;
      });
  }])

  .controller("ProjectController", ["$scope", "Projects", function($scope, Projects) {
    Projects.success(function(data) {
      $scope.projects = data;
    });
  }]);
})();

$(document).ready(function() {

  $(".main").on("mouseenter", ".thumb", function() {
    $(this).children(".caption").slideDown();
  });
  $(".main").on("mouseleave", ".thumb", function() {
    $(this).children(".caption").fadeOut();
  });
  
  $(".menu a").on("click", function(event) {
    
    event.preventDefault();
    var hash = this.hash;
    var windowOffset = $(hash).offset().top;
    
    $("html, body").animate({scrollTop: windowOffset}, 500, function() {
      window.location.hash = hash;
    });
  });
});