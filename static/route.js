(function() {
  var routeModule = angular.module('route', ['ngRoute']);
  routeModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '/static/overview.html'
    });
    $routeProvider.when('/:page', {
      templateUrl: function(args) {
        console.log(args);
        return '/static/root/' + args['page'] + '.html';
      }
    })
    $routeProvider.when('/:category/:page', {
      templateUrl: function(args) {
        return '/static/' + args['category'] + '/' + args['page'] + '.html';
      }
    });
    $locationProvider.html5Mode(true);
  });
})();