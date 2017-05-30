//Minesweeper

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var cols;
var rows;
var w=40;

var totalBees = 10;

var gamestatus = totalBees;
var won = false;
var displaycurrent;

function setup() {
  displaycurrent =  createP();
  createCanvas(401,401);
  cols=floor(width/w);
  rows=floor(height/w);
  grid=make2DArray(cols,rows);
  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
      grid[i][j]= new Cell(i,j,w);
    }
  }

  // Pick totalBees spots
  var options =[];
  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
      options.push([i,j]);
    }
  }

  for(var n =0;n<totalBees;n++){
    var index = floor(random(options.length));
    var choice = options[index];
    var i = choice[0];
    var j = choice[1];
    //Deletes the spot, so it's no longer an option
    options.splice(index,1);
    grid[i][j].bee=true;
  }

  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
      grid[i][j].countBees();
    }
  }
}

function gameOver(){
  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
      grid[i][j].reveal();
    }
  }
}

function mousePressed() {
  //Upon click, reveal cell. Upon Shift+Click, place marker
  if(keyIsPressed && keyCode == SHIFT){
    for(var i=0;i<cols;i++){
      for(var j=0;j<rows;j++){
        if(grid[i][j].contains(mouseX,mouseY)){
          grid[i][j].mark();
        }
      }
    }
  }else{
    for(var i=0;i<cols;i++){
      for(var j=0;j<rows;j++){
        if(grid[i][j].contains(mouseX,mouseY)){
          grid[i][j].reveal();
          if(grid[i][j].bee){
            gameOver();
          }
        }
      }
    }
  }
  gameManager();
}

function gameManager(){
  var todo=totalBees;
  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
      if(grid[i][j].bee && grid[i][j].marker){
        todo--;
      }
    }
  }
  if(todo==0){
    won=true;
  }
  gamestatus = todo;
}

function draw() {
  background(255);
  displaycurrent.html(gamestatus);
  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
      grid[i][j].show();
    }
  }
}
