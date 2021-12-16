var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var sofia,cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,
 cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,
 cardboard21,cardboard22,cup;
 
 
 
 sofia=createSprite(28,24,20,20);
 sofia.shapeColor="pink";

 cardboard1=createSprite(18,94,20,100);
 cardboard2=createSprite(70,80,20,100);
 cardboard3=createSprite(164,10,100,20);
 cardboard4=createSprite(96,195,100,20);
 cardboard5=createSprite(120,100,20,100);
 cardboard6=createSprite(54,240,20,100);
 cardboard7=createSprite(198,150,20,100);
 cardboard8=createSprite(150,244,100,20);
 cardboard9=createSprite(240,302,100,20);
 cardboard10=createSprite(252,212,20,100);
 cardboard11=createSprite(300,110,100,20);
 cardboard12=createSprite(342,310,20,100);
 cardboard13=createSprite(42,338,100,20);
 cardboard14=createSprite(100,380,20,100);
 cardboard15=createSprite(200,350,100,20);
 cardboard16=createSprite(298,250,20,100);
 cardboard17=createSprite(346,156,20,100);
 cardboard18=createSprite(154,390,20,100);
 cardboard19=createSprite(300,20,20,100);
 cardboard20=createSprite(358,48,100,20);
 cardboard21=createSprite(400,200,100,20);
 cardboard22=createSprite(202,15,20,100);
 cup=createSprite(390,376,20,100);
 

cup.shapeColor="gold";
 
 function draw() {
   background("skyblue");
   
   sofia.setVelocity(0,0);
   
  if (sofia.bounce(cup)) {
   textSize(30);
   textFont("Arial");
  fill("white");
  text("You Win",220,143);
  }
  
   if (keyDown("DOWN_ARROW")) 
   {
     sofia.velocityX=0
     sofia.velocityY=5
     }
   
   if (keyDown("UP_ARROW")) 
   {
     sofia.velocityX=0;
   sofia.velocityY=-5;
   }
   
   if (keyDown("LEFT_ARROW")) {
     sofia.velocityX=-5;
     sofia.velocityY=0;
     }
    
    if (keyDown(RIGHT_ARROW)) {
       sofia.velocityX=5;
       sofia.velocityY=0;
     }
     
   if (sofia.isTouching(cardboard1)||sofia.isTouching(cardboard2)||sofia.isTouching(cardboard3)
   ||sofia.isTouching(cardboard4)||sofia.isTouching(cardboard5)||sofia.isTouching(cardboard6)||sofia.isTouching(cardboard7)
   ||sofia.isTouching(cardboard8)||sofia.isTouching(cardboard9)||sofia.isTouching(cardboard10)
   ||sofia.isTouching(cardboard11)||sofia.isTouching(cardboard12)||sofia.isTouching(cardboard13)
   ||sofia.isTouching(cardboard14)||sofia.isTouching(cardboard15)||sofia.isTouching(cardboard16)
   ||sofia.isTouching(cardboard17)||sofia.isTouching(cardboard18)||sofia.isTouching(cardboard19)
   ||sofia.isTouching(cardboard20)||sofia.isTouching(cardboard21)||sofia.isTouching(cardboard22)) {
     sofia.x=28;
     sofia.y=24;
   }
   

   
   sofia.collide(cup);
 createEdgeSprites();
sofia.bounceOff(edges);

drawSprites() ;



  
 }


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
