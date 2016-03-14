export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/main', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/', {
      templateUrl: 'app/homescreen/homescreen.html',
      controller: 'HomescreenController',
      controllerAs: 'home'
    })
    .otherwise({
      redirectTo: '/'
    });
}
