app.controller('GenderCtrl', function($scope, $state, $ionicSlideBoxDelegate, results, userAnswers, showAnswers, breadcrumbAnswers, userNums) {
  console.log('GenderCtrl');

  var myFirebaseRef = new Firebase('https://explobean.firebaseio.com/genetics-totalnum'); 
  var myDataRef = new Firebase('https://explobean.firebaseio.com/genetic-inheritance');
  //var $scope.totalnum;


//  fetches the firebase total number of records
     myFirebaseRef.on("value", function(snap) {
            $scope.totalnum = snap.val();
            userNums['total'] =  $scope.totalnum;
        });



    myDataRef.orderByChild("~query1").equalTo('male').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.malecount = snapshot.numChildren();

    })

    myDataRef.orderByChild("~query1").equalTo('female').on("value", function(snapshot) {
     console.log(snapshot.numChildren());
     $scope.femalecount = snapshot.numChildren();

    })


//  image onload animation
      $scope.results = new results('gender');
      $scope.results.showresults();


  var moreoverlay = document.getElementById('moreoverlay1');
      moreoverlay.style.backgroundColor = '#9190cc';


  $scope.nextquestion = function() {
    $state.go('ringfinger');
  };

  $scope.answered = function(answer) {

    document.getElementById('total-number1').innerHTML = ' of '+ $scope.totalnum;

    var matchesnum;
    if (answer == 'male') {
      matchesnum = $scope.malecount;
      userAnswers['gender'] = 'male';
      showAnswers['gender'] = 'male';

    }

    else   if (answer == 'female') {
              matchesnum = $scope.femalecount;
              userAnswers['gender'] = 'female';
              showAnswers['gender'] = 'female';

            }
    $scope.querystr = answer;
    
 //document.getElementById('breadcrumb').innerHTML =  '//'+userAnswers['gender']  ;
 document.getElementById('breadcrumb').innerHTML =  breadcrumbAnswers.str('1') ;

 
 document.getElementById('total-matches1').innerHTML =  matchesnum ;
    $scope.showoverlay();
   $scope.results = new results('ringfinger');
      $scope.results.showresults();


  }

    $scope.showoverlay =function() {

        TweenLite.to(overlay, 0, {opacity:1});
        TweenLite.set(overlay, {y:0, yPercent:-100});
        TweenLite.set(overlay, {zIndex:50});
        TweenMax.to(overlay, 0.8, {yPercent: 30});
        TweenLite.set(overlaynumbers1, {opacity:1});

        $scope.showmoreoverlay();

      };

    $scope.showmoreoverlay =function() {

        TweenLite.set(moreoverlay, {y:0, yPercent:313});
        TweenLite.set(moreoverlay, {zIndex:5});
        TweenMax.to(moreoverlay, 1, {yPercent: 313});

        TweenLite.to(box1, 2, {opacity:0});
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