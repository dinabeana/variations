app.controller('SkinCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userAnswers, showAnswers, breadcrumbAnswers, userNums) {
  console.log('SkinCtrl');

  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 
  var myDataRef = new Firebase('https://explobean.firebaseio.com/genetic-inheritance');
  //var $scope.totalnum;


//  fetches the firebase total number of records
     myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
        });




    myDataRef.orderByChild("~query7").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~'+userAnswers['dimples']+'~light').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.lightcount = snapshot.numChildren();

    });



    myDataRef.orderByChild("~query7").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~'+userAnswers['dimples']+'~medium-light').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.medlightcount = snapshot.numChildren();

    });


    myDataRef.orderByChild("~query7").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~'+userAnswers['dimples']+'~medium').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.mediumcount = snapshot.numChildren();

    });

    myDataRef.orderByChild("~query7").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~'+userAnswers['dimples']+'~medium-dark').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.meddarkcount = snapshot.numChildren();

    });
    myDataRef.orderByChild("~query7").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~'+userAnswers['dimples']+'~dark').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.darkcount = snapshot.numChildren();

    });


      $scope.results = new results('skin');
      $scope.results.showresults();


  var moreoverlay = document.getElementById('moreoverlay7');
      moreoverlay.style.backgroundColor = '#A55E2D';


  $scope.nextquestion = function() {
    $state.go('finish');
  };


  $scope.answered = function(answer) {
  console.log('answered()');

    document.getElementById('total-number7').innerHTML = 'of '+ $scope.totalnum;
    var matchesnum;


    switch (answer) {
        case 'light':
            matchesnum = $scope.lightcount;
            userAnswers['skin'] = 'light';
            showAnswers['skin'] = 'light skin';
        break;
        case 'medium-light':
            matchesnum = $scope.medlightcount;
            userAnswers['skin'] = 'medium-light';
            showAnswers['skin'] = 'medium-light skin';
        break;
        case 'medium':
             matchesnum = $scope.mediumcount;
            userAnswers['skin'] = 'medium';
            showAnswers['skin'] = 'medium skin';
        break;
        case 'medium-dark':
              matchesnum = $scope.meddarkcount;
            userAnswers['skin'] = 'medium-dark';
            showAnswers['skin'] = 'medium-dark skin';
        break;
        case 'dark':
            matchesnum = $scope.darkcount;
            userAnswers['skin'] = 'dark';
            showAnswers['skin'] = 'dark skin';
        break;
    }


    $scope.querystr = answer;
    userNums['finalmatches'] = matchesnum;
    

   document.getElementById('breadcrumb').innerHTML =  breadcrumbAnswers.str('7') ;

 
 document.getElementById('total-matches7').innerHTML =  matchesnum ;
    $scope.showoverlay();

  }

    $scope.showoverlay =function() {

        TweenLite.to(overlay, 0, {opacity:1});
        TweenLite.set(overlay, {y:0, yPercent:-100});
        TweenLite.set(overlay, {zIndex:5});
        TweenMax.to(overlay, 0.8, {yPercent: 0});
        TweenLite.set(overlaynumbers7, {opacity:1});
        $scope.showmoreoverlay();

      };

    $scope.showmoreoverlay =function() {

        TweenLite.set(moreoverlay, {y:0, yPercent:310});
        TweenLite.set(moreoverlay, {zIndex:5});
        TweenMax.to(moreoverlay, 1, {yPercent: 260});

        TweenLite.to(box1, 2, {opacity:0});
       // TweenLite.to(or, 2, {opacity:0});
        TweenLite.to(box2, 2, {opacity:0});

        TweenLite.to(moreoverlay, 3, {opacity:1});
      };


    $scope.showevenmore =function() {

        TweenMax.to(moreoverlay, 1, {yPercent: 180});

      };


      $scope.hidemoreoverlay = function(answer) {

         TweenMax.to(moreoverlay, 1, {yPercent: 260});


      };


})