app.controller('WidowspeakCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userAnswers, showAnswers, breadcrumbAnswers) {
  console.log('WidowspeakCtrl');

  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 
  var myDataRef = new Firebase('https://explobean.firebaseio.com/genetic-inheritance');
  //var $scope.totalnum;


//  fetches the firebase total number of records
     myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
        });


console.log(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~yes');

    myDataRef.orderByChild("~query5").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~yes').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.yescount = snapshot.numChildren();

    })

    myDataRef.orderByChild("~query5").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~no').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.nocount = snapshot.numChildren();

    })


//  image onload animation
       $scope.results = new results('widowspeak');
      $scope.results.showresults();


  var moreoverlay = document.getElementById('moreoverlay5');
      moreoverlay.style.backgroundColor = '#9190cc';

  $scope.nextquestion = function() {
    $state.go('dimples');
  };


  $scope.answered = function(answer) {
  console.log('answered()');

    document.getElementById('total-number5').innerHTML = 'of '+ $scope.totalnum;
    var matchesnum;
    if (answer == 'yes') {
      matchesnum = $scope.yescount;
      userAnswers['widowspeak'] = 'yes';
      showAnswers['widowspeak'] = 'a widows peak';

    }

    else   if (answer == 'no') {
              matchesnum = $scope.nocount;
              userAnswers['widowspeak'] = 'no';
              showAnswers['widowspeak'] = 'no widows peak';

            }
    $scope.querystr = answer;
    

  document.getElementById('breadcrumb').innerHTML =  breadcrumbAnswers.str('5') ;

 
 document.getElementById('total-matches5').innerHTML =  matchesnum ;
    $scope.showoverlay();

  }


    $scope.showoverlay =function() {

        TweenLite.to(overlay, 0, {opacity:1});
        TweenLite.set(overlay, {y:0, yPercent:-100});
        TweenLite.set(overlay, {zIndex:5});
        TweenMax.to(overlay, 0.8, {yPercent: 0});
        TweenLite.set(overlaynumbers5, {opacity:1});
        $scope.showmoreoverlay();

      };

    $scope.showmoreoverlay =function() {

        TweenLite.set(moreoverlay, {y:0, yPercent:283});
        TweenLite.set(moreoverlay, {zIndex:5});
        TweenMax.to(moreoverlay, 1, {yPercent: 283});

        TweenLite.to(box1, 2, {opacity:0});
        TweenLite.to(or, 2, {opacity:0});
        TweenLite.to(box2, 2, {opacity:0});

        TweenLite.to(moreoverlay, 3, {opacity:1});
      };


    $scope.showevenmore =function() {

        TweenMax.to(moreoverlay, 1, {yPercent: 210});

      };


      $scope.hidemoreoverlay = function(answer) {

         TweenMax.to(moreoverlay, 1, {yPercent: 283});


      };



})