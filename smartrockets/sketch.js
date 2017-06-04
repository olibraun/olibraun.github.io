var population;
var lifespan = 400;
var lifeP;
var genP;
var maxP;
var count = 0;
var target;
var maxforce = 0.2;

var generationCount = 1;
var globalMaxFit = 0;

var allCrashed = false;

var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  createCanvas(400,300);
  rocket = new Rocket();
  population = new Population();
  lifeP = createP();
  genP = createP();
  maxP = createP();
  target = createVector(width/2,50);
}

function draw() {
  background(0);
  population.run();
  lifeP.html("Lifespan: " + count + "/" + lifespan);
  genP.html("Generation: " + generationCount);
  maxP.html("Current maximum fitness: " + globalMaxFit);

  if(count == lifespan){
    //population = new Population();
    population.evaluate();
    population.selection();
    count = 0;
  }

  //Check to see if all rockets have crashed in order to cut off generation early
  allCrashed=true;
  for(var i=0; i<population.rockets.length; i++){
    if(!population.rockets[i].crashed){
      allCrashed = false;
    }
  }
  if(allCrashed){
    count = lifespan-1;
  }

  fill(255);
  rect(rx,ry,rw,rh);

  count++;
  ellipse(target.x,target.y,16,16);
}
