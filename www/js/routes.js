angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.pROFILE', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/pROFILE.html',
        controller: 'pROFILECtrl'
      }
    }
  })

  .state('tabsController.health', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/health.html',
        controller: 'healthCtrl'
      }
    }
  })

  .state('tabsController.fitness', {
    url: '/page3',
    views: {
      'tab4': {
        templateUrl: 'templates/fitness.html',
        controller: 'fitnessCtrl'
      }
    }
  })

  .state('tabsController.emergency', {
    url: '/page8',
    views: {
      'tab5': {
        templateUrl: 'templates/emergency.html',
        controller: 'emergencyCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.status', {
    url: '/page12',
    views: {
      'tab6': {
        templateUrl: 'templates/status.html',
        controller: 'statusCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});