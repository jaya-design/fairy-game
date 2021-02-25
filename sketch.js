var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hand;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	hand = createSprite(650,520,100,20);
	
	//hand.debug = false;

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	hand.addImage(starImg);
	hand.scale = 0.1;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	 
   

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	

}


function draw() {
  background(bgImg);
 // function keyPressed();
// fairy.collide = (rect,200,200)


 //star.collide (fairy);
//  star.debug = true;
//  fairy.debug = true;

 //fairy.collide = ("hand");
 star.collide(hand);


//  star.x = starBody.possition.x;
//  star.y = starBody.possition.y;

//  if(starBody.possition.y > 470){
// 	Matter.Body.setStatic(body, isStatic)
// fairy.collide = (rect,200,200)

//  }
//starBody.bounceOff(hand);

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode === RIGHT_ARROW){
		
        fairy.x = fairy.x+10;

	}
	if(keyCode === LEFT_ARROW){
		
        fairy.x = fairy.x-10;

	}
	if(keyCode === DOWN_ARROW){
		
        star.velocityY = 10;


	}
//   if(starBody.isTouching(hand)){
// 	  starBody.velocityY = 0;
//   }


}
