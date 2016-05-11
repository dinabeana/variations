app.controller('MainCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userNums) {
  console.log('MainCtrl');


  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 

      myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
            userNums['total'] =  $scope.totalnum;
        });

    $scope.startApp = function() {
      $state.go('gender');
    };

    $scope.nextIntro = function() {
      $state.go('intro2');
     // alert(      userNums['total'] );
    };


    $scope.loadIntro2 = function() {
    //  $state.go('intro2');
     // alert(      userNums['total'] );
      document.getElementById('intro2').innerHTML = '<p>Share your uniqueness .  your answers those of the '+userNums['total']+' other people who\'ve used this app too.</p>' ;

    };

    $scope.toIntro = function(){
      $state.go('intro');
    }

    $scope.transition = function() {

          var col=document.getElementById("test");
            col.style.color="#FF0000";
    };

    $scope.finishshowmore =function() {
      //  alert('hi');
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
        TweenLite.set(finishoverlay, {y:0, yPercent:10});
       // TweenLite.set(finishoverlay, {zIndex:5});
        TweenMax.to(finishoverlay, 1, {yPercent: 110});
       // TweenLite.to(finishoverlay, 1, {opacity:1});

      };

    $scope.finishhidemore =function() {
      //  alert('hi');
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
        TweenLite.set(finishoverlay, {y:0, yPercent:110});
       // TweenLite.set(finishoverlay, {zIndex:5});
        TweenMax.to(finishoverlay, 1, {yPercent: 10});
       // TweenLite.to(finishoverlay, 1, {opacity:1});

      };


    $scope.showabout =function() {
      //  alert('hi');
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
        TweenLite.set(aboutoverlay, {y:0, yPercent:110});
        TweenLite.set(aboutoverlay, {zIndex:5});
        TweenMax.to(aboutoverlay, 1, {yPercent: 10});
        TweenLite.to(aboutoverlay, 1, {opacity:1});

      };


    $scope.hideabout =function() {
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
       // TweenLite.to(aboutoverlay, {xPercent:-100, x:0});
       // TweenLite.set(aboutoverlay, {zIndex:5});
        TweenMax.to(aboutoverlay, 1, {yPercent: 110});
        TweenLite.to(aboutoverlay, 1, {opacity:0.3});

      };




})

app.controller('FinishCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, showAnswers, userNums) {
  console.log('FinishCtrl');

//alert(userNums['finalmatches']);
document.getElementById('total-matchesfinish').innerHTML =  userNums['finalmatches'] ;
document.getElementById('total-numberfinish').innerHTML = ' of '+ userNums['total'];

document.getElementById('genderselected').innerHTML = '\\ '+showAnswers['gender'];
document.getElementById('fingerselected').innerHTML = '\\ '+showAnswers['ringfinger'];
document.getElementById('earsselected').innerHTML = '\\ '+showAnswers['ears'];
document.getElementById('eyecolorselected').innerHTML = '\\ '+showAnswers['eyes'];
document.getElementById('widowspeakselected').innerHTML = '\\ '+showAnswers['widowspeak'];
document.getElementById('dimplesselected').innerHTML = '\\ '+showAnswers['dimples'];
document.getElementById('skincolorselected').innerHTML = '\\ '+showAnswers['skin'];



   $scope.startApp = function() {
      $state.go('gender');
    };
    
    $scope.finishshowmore =function() {
      //  alert('hi');
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
        TweenLite.set(finishoverlay, {y:0, yPercent:10});
       // TweenLite.set(finishoverlay, {zIndex:5});
        TweenMax.to(finishoverlay, 1, {yPercent: 110});
       // TweenLite.to(finishoverlay, 1, {opacity:1});

      };

    $scope.finishhidemore =function() {
      //  alert('hi');
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
        TweenLite.set(finishoverlay, {y:0, yPercent:110});
       // TweenLite.set(finishoverlay, {zIndex:5});
        TweenMax.to(finishoverlay, 1, {yPercent: 10});
       // TweenLite.to(finishoverlay, 1, {opacity:1});

      };


    $scope.showabout =function() {
      //  alert('hi');
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
        TweenLite.set(aboutoverlay, {y:0, yPercent:110});
        TweenLite.set(aboutoverlay, {zIndex:5});
        TweenMax.to(aboutoverlay, 1, {yPercent: 10});
        TweenLite.to(aboutoverlay, 1, {opacity:1});

      };


    $scope.hideabout =function() {
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
       // TweenLite.to(aboutoverlay, {xPercent:-100, x:0});
       // TweenLite.set(aboutoverlay, {zIndex:5});
        TweenMax.to(aboutoverlay, 1, {yPercent: 110});
        TweenLite.to(aboutoverlay, 1, {opacity:0.3});

      };


    $scope.showlearnmore =function() {
      //  alert('hi');
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
        TweenLite.set(learnmoreoverlay, {y:0, yPercent:110});
        TweenLite.set(learnmoreoverlay, {zIndex:5});
        TweenMax.to(learnmoreoverlay, 1, {yPercent: 10});
        TweenLite.to(learnmoreoverlay, 1, {opacity:1});

      };


    $scope.hidelearnmore =function() {
       // TweenLite.to(aboutoverlay, 0, {opacity:1});
       // TweenLite.to(aboutoverlay, {xPercent:-100, x:0});
       // TweenLite.set(aboutoverlay, {zIndex:5});
        TweenMax.to(learnmoreoverlay, 1, {yPercent: 110});
        TweenLite.to(learnmoreoverlay, 1, {opacity:0.3});

      };

})




