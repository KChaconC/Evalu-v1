(() => {
    'use strict';
    angular
      .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
      .config(routing);
    routing.$inject = ['$stateProvider', '$urlRouterProvider'];
  
    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
  
      $stateProvider
        .state('landingPage', {
          url: '/',
          templateUrl: './components/landingPage/landing.view.html',
          data:{
            pageTitle: 'Evalu'
          }
        })
        $urlRouterProvider.otherwise('/');
    };
});    