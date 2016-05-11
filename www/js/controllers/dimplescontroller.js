app.controller('DimplesCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userAnswers, showAnswers, breadcrumbAnswers) {
  console.log('DimplesCtrl');

  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 
  var myDataRef = new Firebase('https://explobean.firebaseio.com/genetic-inheritance');
  //var $scope.totalnum;


//  fetches the firebase total number of records
     myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
        });


//console.log(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~DIMPLESANSWER');

    myDataRef.orderByChild("~query6").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~yes').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.yescount = snapshot.numChildren();

    })

    myDataRef.orderByChild("~query6").equalTo(userAnswers['gender']+'~'+userAnswers['ringfinger']+'~'+userAnswers['ears']+'~'+userAnswers['eyes']+'~'+userAnswers['widowspeak']+'~no').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.nocount = snapshot.numChildren();

    })


//  image onload animation
      $scope.results = new results('dimples');
      $scope.results.showresults();


  var moreoverlay = document.getElementById('moreoverlay6');
      moreoverlay.style.backgroundColor = '#35271C';

  $scope.nextquestion = function() {
    $state.go('skin');
  };

  $scope.answered = function(answer) {
  console.log('answered()');

    document.getElementById('total-number6').innerHTML = 'of '+ $scope.totalnum;
    var matchesnum;
    if (answer == 'yes') {
      matchesnum = $scope.yescount;
      userAnswers['dimples'] = 'yes';
      showAnswers['dimples'] = 'dimples';

    }

    else   if (answer == 'no') {
              matchesnum = $scope.nocount;
              userAnswers['dimples'] = 'no';
              showAnswers['dimples'] = 'no dimples';

            }
    $scope.querystr = answer;
    

 document.getElementById('breadcrumb').innerHTML =  breadcrumbAnswers.str('6') ;

 
 document.getElementById('total-matches6').innerHTML =  matchesnum ;
    $scope.showoverlay();

  }

    $scope.showoverlay =function() {

        TweenLite.to(overlay, 0, {opacity:1});
        TweenLite.set(overlay, {y:0, yPercent:-100});
        TweenLite.set(overlay, {zIndex:5});
        TweenMax.to(overlay, 0.8, {yPercent: 0});
        TweenLite.set(overlaynumbers6, {opacity:1});
        $scope.showmoreoverlay();

      };

    $scope.showmoreoverlay =function() {

        TweenLite.set(moreoverlay, {y:0, yPercent:210});
        TweenLite.set(moreoverlay, {zIndex:5});
        TweenMax.to(moreoverlay, 1, {yPercent: 210});

        TweenLite.to(box1, 2, {opacity:0});
        TweenLite.to(or, 2, {opacity:0});
        TweenLite.to(box2, 2, {opacity:0});

        TweenLite.to(moreoverlay, 3, {opacity:1});
      };


    $scope.showevenmore =function() {

        TweenMax.to(moreoverlay, 1, {yPercent: 130});

      };


      $scope.hidemoreoverlay = function(answer) {

         TweenMax.to(moreoverlay, 1, {yPercent: 210});


      };



})