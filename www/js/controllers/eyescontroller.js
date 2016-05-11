app.controller('EyesCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userAnswers, showAnswers, breadcrumbAnswers) {
  console.log('EyesCtrl');

  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 
  var myDataRef = new Firebase('https://explobean.firebaseio.com/genetic-inheritance');
  //var $scope.totalnum;


//  fetches the firebase total number of records
     myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
        });

//console.log(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~yes')
    myDataRef.orderByChild("~query4").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~blue').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.bluecount = snapshot.numChildren();

    })

    myDataRef.orderByChild("~query4").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~brown').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.browncount = snapshot.numChildren();

    })

     myDataRef.orderByChild("~query4").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~hazel').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.hazelcount = snapshot.numChildren();

    })

    myDataRef.orderByChild("~query4").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~green').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.greencount = snapshot.numChildren();

    })


//  image onload animation
      $scope.results = new results('eyes');
      $scope.results.showresults();


  var moreoverlay = document.getElementById('moreoverlay4');
      moreoverlay.style.backgroundColor = '#916F70';

  $scope.nextquestion = function() {
    $state.go('peak');
  };



  $scope.answered = function(answer) {
  console.log('answered()');

    document.getElementById('total-number4').innerHTML = 'of '+ $scope.totalnum;
    var matchesnum;

    switch (answer) {
        case 'blue':
            matchesnum = $scope.bluecount;
            userAnswers['eyes'] = 'blue';
            showAnswers['eyes'] = 'blue eyes';
        break;
        case 'brown':
            matchesnum = $scope.browncount;
            userAnswers['eyes'] = 'brown';
            showAnswers['eyes'] = 'brown eyes';
        break;
        case 'green':
            matchesnum = $scope.greencount;
            userAnswers['eyes'] = 'green';
            showAnswers['eyes'] = 'green eyes';
        break;
        case 'hazel':
            matchesnum = $scope.hazelcount;
            userAnswers['eyes'] = 'hazel';
            showAnswers['eyes'] = 'hazel eyes';
        break;
    }


    $scope.querystr = answer;
    

  document.getElementById('breadcrumb').innerHTML =  breadcrumbAnswers.str('4') ;

 
 document.getElementById('total-matches4').innerHTML =  matchesnum ;
    $scope.showoverlay();

  }

       $scope.showoverlay =function() {

        TweenLite.to(overlay, 0, {opacity:1});
        TweenLite.set(overlay, {y:0, yPercent:-100});
        TweenLite.set(overlay, {zIndex:5});
        TweenMax.to(overlay, 0.8, {yPercent: 0});
        TweenLite.set(overlaynumbers4, {opacity:1});
        $scope.showmoreoverlay();

      };

    $scope.showmoreoverlay =function() {

        TweenLite.set(moreoverlay, {y:0, yPercent:348});
        TweenLite.set(moreoverlay, {zIndex:5});
        TweenMax.to(moreoverlay, 1, {yPercent: 348});

        TweenLite.to(box1, 2, {opacity:0});
        TweenLite.to(box2, 2, {opacity:0});

        TweenLite.to(moreoverlay, 3, {opacity:1});
      };


    $scope.showevenmore =function() {

        TweenMax.to(moreoverlay, 1, {yPercent: 280});

      };


      $scope.hidemoreoverlay = function(answer) {

         TweenMax.to(moreoverlay, 1, {yPercent: 348});


      }



})