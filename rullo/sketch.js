//Sketch-Datei für Rullo
let manager;
let mouseTimer;

function setup() {
  createCanvas(500,700);
  manager = new gameManager();
}

function draw() {
  background(51);
  manager.update();
  manager.show();
}

function mousePressed(){
  mouseTimer = new Date();
}

function mouseReleased(){
  let now = new Date();
  if(now-mouseTimer > 350){
    manager.mouseAction("LONG");
  }else{
    manager.mouseAction("SHORT");
  }
}
