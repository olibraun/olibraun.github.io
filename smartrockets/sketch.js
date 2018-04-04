let population;
let lifespan = 400;
let lifeP;
let genP;
let maxP;
let count = 0;
let target;
let maxforce = 0.2;

let generationCount = 1;
let globalMaxFit = 0;

let allCrashed = false;

let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;

function setup() {
  createCanvas(400,300);
  rocket = new Rocket();
  population = new Population();
  lifeP = createP();
  genP = createP();
  maxP = createP();
  target = createVector(width/2, 50);
}

function mouseClicked() {
  rx = mouseX;
}

function draw() {
  background(0);
  population.run();
  lifeP.html("Lifespan: " + count + "/" + lifespan);
  genP.html("Generation: " + generationCount);
  maxP.html("Current maximum fitness: " + globalMaxFit);

  if(count == lifespan) {
    //population = new Population();
    population.evaluate();
    population.selection();
    count = 0;
  }

  //Check to see if all rockets have crashed in order to cut off generation early
  allCrashed=true;
  population.rockets.forEach(rocket => {
    if(!rocket.crashed) {
      allCrashed = false;
    }
  });
  if(allCrashed) {
    count = lifespan-1;
  }

  fill(255);
  rect(rx, ry, rw, rh);

  count++;
  ellipse(target.x, target.y, 16, 16);
}
