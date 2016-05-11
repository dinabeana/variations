var app = angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'MainCtrl'

  })
  .state('intro2', {
    url: '/',
    templateUrl: 'templates/intro2.html',
    controller: 'MainCtrl'

  })
// traits (in order)
  .state('gender', {
    url: '/gender',
    templateUrl: 'templates/gender.html',
    controller: 'GenderCtrl'
  })
  .state('ringfinger', { 
    url: '/ringfinger',
    templateUrl: 'templates/ringfinger.html',
    controller: 'FingerCtrl'
  })
  .state('ears', {
    url: '/ears',
    templateUrl: 'templates/earsattached.html',
    controller: 'EarsCtrl'
  })
  .state('eyes', {
    url: '/eyes',
    templateUrl: 'templates/eyes.html',
    controller: 'EyesCtrl'
  })
  .state('peak', {
    url: '/peak',
    templateUrl: 'templates/widowspeak.html',
    controller: 'WidowspeakCtrl'
  })
  .state('dimples', {
    url: '/dimples',
    templateUrl: 'templates/dimples.html',
    controller: 'DimplesCtrl'
  })
  .state('skin', {
    url: '/skin',
    templateUrl: 'templates/skin.html',
    controller: 'SkinCtrl'
  })

  .state('finish', {
    url: '/finish',
    templateUrl: 'templates/finish.html',
    controller: 'FinishCtrl'
  })
  ;

  $urlRouterProvider.otherwise("/");

})






.directive('dragBack', function($ionicGesture, $state) {
  return {
    restrict : 'EAC',
    link : function(scope, elem, attr) {
      
      console.log("Dragback Link");
      
      $ionicGesture.on('swiperight', function(event) {
      
        console.log('Got swiped!');
        event.preventDefault();
        window.history.back();
        
      }, elem);
      
    }
  }  
});