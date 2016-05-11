app.controller('EarsCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userAnswers, showAnswers, breadcrumbAnswers) {
  console.log('EarsCtrl');

  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 
  var myDataRef = new Firebase('https://explobean.firebaseio.com/genetic-inheritance');
  //var $scope.totalnum;


//  fetches the firebase total number of records
     myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
        });


    myDataRef.orderByChild("~query3").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~yes').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.malecount = snapshot.numChildren();

    })

    myDataRef.orderByChild("~query3").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~no').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.femalecount = snapshot.numChildren();

    })


      $scope.results = new results('ears');
      $scope.results.showresults();

      var moreoverlay = document.getElementById('moreoverlay3');
      moreoverlay.style.backgroundColor = '#934928';


  $scope.nextquestion = function() {
    $state.go('eyes');
  };



  $scope.answered = function(answer) {
      console.log('answered()');

        document.getElementById('total-number3').innerHTML = 'of '+ $scope.totalnum;
        var matchesnum;
        if (answer == 'yes') {
          matchesnum = $scope.malecount;
          userAnswers['ears'] = 'yes';
          showAnswers['ears'] = 'earlobes attached';

        }

        else   if (answer == 'no') {
                  matchesnum = $scope.femalecount;
                  userAnswers['ears'] = 'no';
                  showAnswers['ears'] = 'earlobes unattached';

                }
        $scope.querystr = answer;
        

      document.getElementById('breadcrumb').innerHTML =  breadcrumbAnswers.str('3') ;
     document.getElementById('total-matches3').innerHTML =  matchesnum ;


        $scope.showoverlay();

  }


   $scope.showoverlay =function() {

        TweenLite.to(overlay, 0, {opacity:1});
        TweenLite.set(overlay, {y:0, yPercent:-100});
        TweenLite.set(overlay, {zIndex:5});
        TweenMax.to(overlay, 0.8, {yPercent: 0});
        TweenLite.set(overlaynumbers3, {opacity:1});
        $scope.showmoreoverlay();

      };

    $scope.showmoreoverlay =function() {

        TweenLite.set(moreoverlay, {y:0, yPercent:313});
        TweenLite.set(moreoverlay, {zIndex:5});
        TweenMax.to(moreoverlay, 1, {yPercent: 313});

        TweenLite.to(box1, 2, {opacity:0});
        TweenLite.to(or, 2, {opacity:0});
        TweenLite.to(box2, 2, {opacity:0});

        TweenLite.to(moreoverlay, 3, {opacity:1});
      };


    $scope.showevenmore =function() {

        TweenMax.to(moreoverlay, 1, {yPercent: 240});

      };


      $scope.hidemoreoverlay = function(answer) {

         TweenMax.to(moreoverlay, 1, {yPercent: 313});


      };



})