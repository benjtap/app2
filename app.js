var bookApp = angular.module('bookApp', ['ngResource','ngRoute','ngDialog']);

bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/booklist', {templateUrl: 'book-list.html',   controller: 'BookListCtrl'})
    .when('/login', {templateUrl: 'login.html',   controller: 'LoginCtrl'})
    .otherwise({ redirectTo: '/login' });
}]);



