app.controller('FingerCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userAnswers, showAnswers, breadcrumbAnswers) {
  console.log('FingerCtrl');

  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 
  var myDataRef = new Firebase('https://explobean.firebaseio.com/genetic-inheritance');
  //var $scope.totalnum;


//  fetches the firebase total number of records
     myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
        });



    myDataRef.orderByChild("~query2").equalTo(userAnswers['gender']+'~yes').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.yescount = snapshot.numChildren();

    })

    myDataRef.orderByChild("~query2").equalTo(userAnswers['gender']+'~no').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.nocount = snapshot.numChildren();

    })
//  image onload animation


      $scope.results = new results('ringfinger');
      $scope.results.showresults();

      var moreoverlay = document.getElementById('moreoverlay2');
          moreoverlay.style.backgroundColor = '#59B4B9';


    $scope.nextquestion = function() {
      //alert();
      $state.go('ears');
    };

    $scope.reload = function() {
      hideoverlay();
      $scope.results.showresults(0);
  };

  $scope.answered = function(answer) {

    document.getElementById('total-number2').innerHTML = ' of '+ $scope.totalnum;

    var matchesnum;
    if (answer == 'yes') {
      matchesnum = $scope.yescount;
      userAnswers['ringfinger'] = 'yes';
      showAnswers['ringfinger'] = 'longer ring finger';

    }
    else   if (answer == 'no') {
              matchesnum = $scope.nocount;
              userAnswers['ringfinger'] = 'no';
              showAnswers['ringfinger'] = 'longer index finger';

          }
   // alert( $scope.querystr);
    $scope.querystr =  $scope.querystr + '~'+ answer;



 document.getElementById('breadcrumb1').innerHTML =   breadcrumbAnswers.str('2') ;
 document.getElementById('total-matches2').innerHTML =  matchesnum ;
    $scope.showoverlay();

  }

    $scope.showoverlay =function() {

        TweenLite.to(overlay, 0, {opacity:1});
        TweenLite.set(overlay, {y:0, yPercent:-100});
        TweenLite.set(overlay, {zIndex:5});
        TweenMax.to(overlay, 0.8, {yPercent: 0});
        TweenLite.set(overlaynumbers2, {opacity:1});
        $scope.showmoreoverlay();

      };

    $scope.showmoreoverlay =function() {

        TweenLite.set(moreoverlay, {y:0, yPercent:348});
        TweenLite.set(moreoverlay, {zIndex:5});
        TweenMax.to(moreoverlay, 1, {yPercent: 348});

        TweenLite.to(box1, 2, {opacity:0});
        TweenLite.to(or, 2, {opacity:0});
        TweenLite.to(box2, 2, {opacity:0});

        TweenLite.to(moreoverlay, 3, {opacity:1});
      };


    $scope.showevenmore =function() {

        TweenMax.to(moreoverlay, 1, {yPercent: 280});

      };

      $scope.hidemoreoverlay = function(answer) {

         TweenMax.to(moreoverlay, 1, {yPercent: 348});


      };



})