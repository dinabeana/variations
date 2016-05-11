app.factory('userAnswers', function() {
  return {};
});

app.factory('showAnswers', function() {
  return {};
});

app.factory('userNums', function() {
  return {};
});

app.factory('breadcrumbAnswers', function(showAnswers) {

  return {

    str: function(_qid) {
            var str = '';
            var strqid = '';
            switch (_qid) {
                  case '1' :
                       str += 'people are <span class="hilite">'+showAnswers['gender']+'</span> like you.';

                  break;
                  case '2' :
                       str += 'people are <span class="hilite">'+showAnswers['gender']+'</span> with a <span class="hilite">'+showAnswers['ringfinger']+'</span> like you.';
                  break;
                  case '3' :
                        str += 'people are <span class="hilite">'+showAnswers['gender']+'</span> with a <span class="hilite">'+showAnswers['ringfinger']+'</span> and <span class="hilite">'+showAnswers['ears']+'</span> like you.';

                  break;
                  case '4' :

                        str += 'people are <span class="hilite">'+showAnswers['gender']+'</span> with a <span class="hilite">'+showAnswers['ringfinger']+'</span>,  <span class="hilite">'+showAnswers['ears']+'</span>, and <span class="hilite">'+showAnswers['eyes'] +'</span> like you.';

                  break;
                  case '5' :

                        str += 'people are <span class="hilite">'+showAnswers['gender']+'</span> with a <span class="hilite">'+showAnswers['ringfinger']+'</span>,  <span class="hilite">'+showAnswers['ears']+'</span>,  <span class="hilite">'+showAnswers['eyes'] +'</span></span>, and <span class="hilite">'+showAnswers['widowspeak']+'</span> like you.';

                  break;
                  case '6' :

                        str += 'people are <span class="hilite">'+showAnswers['gender']+'</span> with a <span class="hilite">'+showAnswers['ringfinger']+'</span>,  <span class="hilite">'+showAnswers['ears']+'</span>,  <span class="hilite">'+showAnswers['eyes'] +'</span>,  <span class="hilite">'+showAnswers['widowspeak']+'</span></span>, and <span class="hilite">'+showAnswers['dimples']+'</span> like you.';

                  break;
                  case '7' :
                      str += 'people are <span class="hilite">'+showAnswers['gender']+'</span> with a <span class="hilite">'+showAnswers['ringfinger']+'</span>,  <span class="hilite">'+showAnswers['ears']+'</span>,  <span class="hilite">'+showAnswers['eyes'] +'</span>,  <span class="hilite">'+showAnswers['widowspeak']+'</span>,  <span class="hilite">'+showAnswers['dimples']+'</span>, and <span class="hilite">'+showAnswers['skin']+'</span> like you.';

                  break;
                  default:
                      str='// ';

              }
          return str;

        } //str: function

  }; // return

});



app.factory('results', function() {
  //  var items = [];

        // triangulation using https://github.com/ironwallaby/delaunay
        // For more check out zachsaucier.com


    
       const TWO_PI = Math.PI * 2;
 
        var images = [], 
            imageIndex = 0;

        var image,
            imageWidth = 584,
            imageHeight = 700;
         
        var vertices = [],
            custompoints = [],
            numpoints = 200,
            indices = [],
            prevfrag = [],
            fragments = [];

        var margin = 50;


        var clickPosition = [imageWidth * 0.5, imageHeight * 0.5];

        var _qid;
        var container;

      images[0] = new Image();  // gender
      images[0].src =  'img/delauney/collage_sm.png';

      images[1] = new Image();    // ring finger
      images[1].src =  'img/blueoverlay.png';

      images[2] = new Image();   // ears
      images[2].src =  'img/delauney/earlobe-points-dina.png';

      images[3] = new Image();  // eyes
      images[3].src =  'img/delauney/eye.png';

      images[4] = new Image();    // widows peak
      images[4].src =  'img/widowspeak.png';

      images[5] = new Image();   // dimples
      images[5].src =  'img/delauney/v2dimples.gif';

      images[6] = new Image();   // skin
      images[6].src =  'img/delauney/collage_sm.png';

    function imageEffect(newstate) {



// default settings while i work on it
                  _qid = 0;
                  custompoints = dimplepoints;
                  numpoints = 117;
                  image = images[1];

            switch (newstate) {
              // gender is default case at bottom

              case 'ringfinger' :
                  _qid = 2;
                  image = images[1];
              break;

              case 'ears' :
                  _qid = 3;
                  custompoints = points;
                  numpoints = 83;
                  image = images[2];
              break;

              case 'eyes' :
                  _qid = 4;
                  custompoints = eyepoints;
                  numpoints = 114;
                  image = images[3];
              break;

              case 'widowspeak' :
                  _qid = 5;
              
                  image = images[4];
              break;

              case 'dimples' :
                  _qid = 6;
                  custompoints = dimplepoints;
                  numpoints = 117;
                  image = images[5];
              break;

              case 'skin' :
                  _qid = 7;
                  custompoints = dimplepoints;
                  numpoints = 117;
                  image = images[6];
              break;

              default :  // gender
                  _qid = 1;
                  custompoints = genderpoints;
                  numpoints = 130;
                  image = images[0];

            }

              container = document.getElementById('container'+_qid);

          TweenMax.set(container, {perspective:500});

        




    }

imageEffect.prototype = {



  showresults : function() {

        image.direction = "top";
        container.appendChild(image);
        image.style.opacity = 0;
        this.triangulateIn();

    },


      triangulateIn : function(event) {
            var box = image.getBoundingClientRect(),
                top = box.top,
                left = box.left;
          
            if(image.direction == "left") {
              clickPosition[0] = 0; 
              clickPosition[1] = imageHeight / 2;
            } else if(image.direction == "top") {
              clickPosition[0] = imageWidth / 2;
              clickPosition[1] = 0;
            } else if(image.direction == "bottom") {
              clickPosition[0] = imageWidth / 2;
              clickPosition[1] = imageHeight;
            } else if(image.direction == "right") {
              clickPosition[0] = imageWidth;
              clickPosition[1] = imageHeight / 2;
            } 
            

            triangulate();
            this.build();

      },


       build : function() {

            var p0, p1, p2,
                fragment;

            var tl0 = new TimelineMax({onComplete:this.buildCompleteHandler});

            for (var i = 0; i < indices.length; i += 3) {
                p0 = vertices[indices[i + 0]];
                p1 = vertices[indices[i + 1]];
                p2 = vertices[indices[i + 2]];

                fragment = new Fragment(p0, p1, p2);

                var dx = fragment.centroid[0] - clickPosition[0],
                    dy = fragment.centroid[1] - clickPosition[1],
                    d = Math.sqrt(dx * dx + dy * dy),
                    rx = 30 * sign(dy),
                    ry = 90 * -sign(dx),
                    delay = d * 0.003 * randomRange(0.9, 1.1);
                fragment.canvas.style.zIndex = Math.floor(d).toString();

                var tl1 = new TimelineMax(); 

                if(image.direction == "left") {
                  rx = Math.abs(rx); 
                  ry = 0;          
                } else if(image.direction == "top") {
                  rx = 0;
                  ry = Math.abs(ry);
                } else if(image.direction == "bottom") {
                  rx = 0;
                  ry = - Math.abs(ry);
                } else if(image.direction == "right") {
                  rx = - Math.abs(rx);
                  ry = 0;
                } 
                
                tl1.from(fragment.canvas, 1, {
                      z:-50,
                      rotationX:rx,
                      rotationY:ry,
                      scaleX:0,
                      scaleY:0,
                      ease:Cubic.easeIn
                 });
                tl1.from(fragment.canvas, 0.4,{alpha:0}, 0.6);
              
                tl0.insert(tl1, delay);

               fragments.push(fragment);
               container.appendChild(fragment.canvas);
            }
        },

        buildCompleteHandler : function() {

            image.style.opacity = 1;


            image.addEventListener('transitionend', function catchTrans() {
                fragments.forEach(function(f) {
                    container.removeChild(f.canvas);
                });

                fragments.length = 0;
                vertices.length = 0;
                indices.length = 0;

                //placeImage();  
                this.removeEventListener('transitionend',catchTrans,false);
            }, false);

          TweenLite.to(box1, 2, {css:{top:"400px", backgroundColor:"#ffffff"}, ease:Power2.easeOut});
          TweenLite.to(box2, 2, {css:{top:"400px", backgroundColor:"#ffffff"}, ease:Power2.easeOut});
         // TweenLite.to("#or", 2, {css:{top:"420px"}, ease:Power2.easeOut});
          TweenLite.to(traitquestion, 2, {css:{top:"100px"}, ease:Power2.easeOut});
          TweenLite.to(traitquestion, 3, {opacity:1});
          TweenLite.to(box1, 3, {opacity:1});
          TweenLite.to(box2, 3, {opacity:1});


        }



}
    





        function triangulate() {

          for(var i = 0; i < numpoints; i++) {        // change this number to match num of points
            vertices.push(custompoints[i]); // change this array to match points of image
          }
              
            vertices.push([0,0]);
            vertices.push([imageWidth,0]);
            vertices.push([imageWidth, imageHeight]);
            vertices.push([0, imageHeight]);
          
            vertices.forEach(function(v) {
                v[0] = clamp(v[0], 0, imageWidth);
                v[1] = clamp(v[1], 0, imageHeight);
            });
          
            indices = Delaunay.triangulate(vertices);
        }

        

       



        //////////////
        // MATH UTILS
        //////////////

        function randomRange(min, max) {
            return min + (max - min) * Math.random();
        }

        function clamp(x, min, max) {
            return x < min ? min : (x > max ? max : x);
        }

        function sign(x) {
            return x < 0 ? -1 : 1;
        }

        //////////////
        // FRAGMENT
        //////////////

        Fragment = function(v0, v1, v2) {
            this.v0 = v0;
            this.v1 = v1;
            this.v2 = v2;

            this.computeBoundingBox();
            this.computeCentroid();
            this.createCanvas();
            this.clip();
        };
        Fragment.prototype = {
            computeBoundingBox:function() {
                var xMin = Math.min(this.v0[0], this.v1[0], this.v2[0]),
                    xMax = Math.max(this.v0[0], this.v1[0], this.v2[0]),
                    yMin = Math.min(this.v0[1], this.v1[1], this.v2[1]),
                    yMax = Math.max(this.v0[1], this.v1[1], this.v2[1]);

                 this.box = {
                    x:Math.round(xMin),
                    y:Math.round(yMin),
                    w:Math.round(xMax - xMin),
                    h:Math.round(yMax - yMin)
                };

            },
            computeCentroid:function() {
                var x = (this.v0[0] + this.v1[0] + this.v2[0]) / 3,
                    y = (this.v0[1] + this.v1[1] + this.v2[1]) / 3;

                this.centroid = [x, y];
            },
            createCanvas:function() {
                this.canvas = document.createElement('canvas');
                this.canvas.width = this.box.w;
                this.canvas.height = this.box.h;
                this.canvas.style.width = this.box.w + 'px';
                this.canvas.style.height = this.box.h + 'px';
                this.canvas.style.left = this.box.x + 'px';
                this.canvas.style.top = this.box.y + 'px';
                this.ctx = this.canvas.getContext('2d');
            },
            clip:function() {
                this.ctx.save();
                this.ctx.translate(-this.box.x, -this.box.y);
                this.ctx.beginPath();
                this.ctx.moveTo(this.v0[0], this.v0[1]);
                this.ctx.lineTo(this.v1[0], this.v1[1]);
                this.ctx.lineTo(this.v2[0], this.v2[1]);
                this.ctx.closePath();
                this.ctx.clip();
                this.ctx.drawImage(image, 0, 0);
                this.ctx.restore();
            }
        };


   
    
    return imageEffect;
});