var xsize = 12;
var ysize = 12;
var cells;

var runBox;
var clearButton;
var stepButton;
var gliderButton;
var gliderBox;
var stationaryButton;
var oscillatorsButton;
var explosionButton;
var pentominoButton;
var gliderGunButton;

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function mousePressed() {
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0;i<ncols;i++){
    for(var j=0;j<nrows;j++){
      if(cells[i][j].contains(mouseX,mouseY)){
        if(cells[i][j].alive){
          cells[i][j].alive = false;
        }else{
          cells[i][j].alive = true;
        }
      }
    }
  }
}

function setup() {
  createCanvas(721,721);
  background(51);
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  cells = make2DArray(ncols,nrows);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j] = new Cell(i,j);
    }
  }
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].countNeighbors();
      cells[i][j].show();
    }
  }
  runBox = createCheckbox('Running');
  clearButton = createButton('Clear all');
  clearButton.mousePressed(clearall);
  stepButton = createButton('Simulate one step')
  stepButton.mousePressed(step);
  createP('<p>')
  gliderButton = createButton('Create glider')
  gliderButton.mousePressed(makeGlider);
  gliderBox = createCheckbox('with trap');
  createP('<p>');
  stationaryButton = createButton('Stationary objects');
  stationaryButton.mousePressed(makeStationary);
  oscillatorsButton = createButton('Oscillators');
  oscillatorsButton.mousePressed(makeOscillators);
  explosionButton = createButton('Explosion');
  explosionButton.mousePressed(makeExplosion);
  pentominoButton = createButton('f-Pentomino');
  pentominoButton.mousePressed(makePentomino);
  gliderGunButton = createButton('Glider gun');
  gliderGunButton.mousePressed(makeGliderGun);
}

function clearall(){
  runBox.checked(false);
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].alive = false;
      cells[i][j].nextalive = false;
    }
  }
}

function step(){
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].prepare();
    }
  }
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].update();
    }
  }
}

function draw() {
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].prepare();
      cells[i][j].show();
    }
  }
  if(runBox.checked()){
    for(var i=0; i<ncols; i++){
      for(var j=0; j<nrows; j++){
        cells[i][j].update();
        //cells[i][j].show();
      }
    }
  }
}
