const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var direita, esquerda, teto, chao;
var ball;
var botaoCima, botaoDireita;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  direita = new Parede(390,200,20,400);
  esquerda = new Parede(10,200,20,400);
  teto = new Parede(200,10,400,20);
  chao = new Parede(200,390,400,20);

  var ballConfig = {
    restitution: 0.5
  }

  ball = Bodies.circle(200,100,20,ballConfig);
  World.add(world,ball);

  botaoCima = createImg("up.png");
  botaoCima.position(20,30);
  botaoCima.size(50,50);
  botaoCima.mouseClicked(forcaCima);

  botaoDireita = createImg("right.png");
  botaoDireita.position(220,30);
  botaoDireita.size(50,50);
  botaoDireita.mouseClicked(forcaDireita);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  direita.mostrar();
  esquerda.mostrar();
  teto.mostrar();
  chao.mostrar();

  ellipse(ball.position.x, ball.position.y,20);
}

function forcaCima(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

function forcaDireita(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}