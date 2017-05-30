//Sketch-Datei für Breakout

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var paddle;
var paddleheight = 350;
var acc = 7;

var blockwidth = 40.0;
var blockheight = blockwidth*0.75;
var blockspacing = 16.0;
var ncols;

var ball;
var blocks;

function setup() {
  createCanvas(700,400);
  paddle = new Paddle();
  ball = new Ball();
  ncols = floor( (width-blockspacing)/(blockspacing+blockwidth) );
  blocks = make2DArray(ncols,4);
  for(var i=0;i<ncols;i++){
    for(var j=0;j<4;j++){
      var pos = createVector();
      blocks[i][j] = new Block(i,j);
    }
  }
}

function draw() {
  background(51);
  //stroke(251);
  //line(width/2,0,width/2,height);
  for(var i=0;i<ncols;i++){
    for(var j=0;j<4;j++){
      blocks[i][j].show();
    }
  }
  paddle.update();
  paddle.show();
  ball.dead();
  ball.update();
  ball.show();
}
