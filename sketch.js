const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var largeBox1, largeBox2, largeBox3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(100,250,3,{restitution:0.2, isStatic:false});
	World.add(world, paperBody);


	var options = {
        isStatic: true
    }

	ground = Bodies.rectangle(350,480,900,20, options)
    World.add(world,ground)

	//paper = new Paper(100,200,40);
	largeBox1 = new LargeBox(350,455,20,70)
	largeBox2 = new LargeBox(450,455,20,70)
	largeBox3 = new LargeBox(400,470,115,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 900,20)

  ellipseMode(CENTER)
  ellipse(paperBody.position.x, paperBody.position.y,15,15)
  //paper.display();

	largeBox1.display();
	largeBox2.display();
	largeBox3.display();

  drawSprites();

		
	}
function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:30,y:-1});
	}
}


