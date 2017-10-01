//Sketch-Datei für Rullo
let manager;

function setup() {
  createCanvas(500,700);
  manager = new gameManager();
}

function draw() {
  background(51);
  manager.update();
  manager.show();
}

function mouseClicked(){
  manager.mouseAction();
}
