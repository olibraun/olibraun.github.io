function Cell(i,j,w){
  this.i=i;
  this.j=j;
  this.x=i*w;
  this.y=j*w;
  this.w=w;
  this.neighborCount=0;
  this.bee=false;
  this.revealed = false;
  this.marker=false;
}

Cell.prototype.show = function(){
  stroke(0);
  noFill();
  rect(this.x,this.y,this.w,this.w);
  if(this.revealed){
    if(this.bee){
      fill(127);
      ellipse(this.x+this.w*0.5,this.y+this.w*0.5,this.w*0.5);
    }else{
      fill(200);
      rect(this.x,this.y,this.w,this.w);
      if(this.neighborCount>0){
        textAlign(CENTER);
        textSize(floor(2*w/3));
        fill(0);
        text(this.neighborCount,this.x+this.w*0.5,this.y+this.w-6);
      }
    }
  }
  if(this.marker && !this.revealed){
    fill(200,0,0);
    rect(this.x,this.y,this.w,this.w);
  }
  if(won){
    fill(0,200,0,100);
    rect(this.x,this.y,this.w,this.w);
  }
}

Cell.prototype.countBees = function(x,y){
  if(this.bee){
    this.neighborCount = -1;
  }
  var total = 0;
  for(var xoff=-1; xoff<=1; xoff++){
    for(var yoff=-1; yoff<=1; yoff++){
      var i = this.i+xoff;
      var j = this.j+yoff;
      if(i>-1 && i < cols && j > -1 && j < rows){
        var neighbor = grid[i][j];
        if(neighbor.bee){
          total++;
        }
      }
    }
  }
  this.neighborCount=total;
}

Cell.prototype.contains = function(x,y){
  return (x > this.x && x < this.x + this.w && y> this.y && y<this.y+this.w);
}

Cell.prototype.reveal = function(x,y){
  this.revealed=true;
  if(this.neighborCount == 0){
    //flood fill time
    this.floodFill();

  }
}

Cell.prototype.floodFill=function(){
  for(var xoff=-1; xoff<=1; xoff++){
    for(var yoff=-1; yoff<=1; yoff++){
      var i = this.i+xoff;
      var j = this.j+yoff;
      if(i>-1 && i < cols && j > -1 && j < rows){
        var neighbor = grid[i][j];
        if(!neighbor.bee && !neighbor.revealed){
          neighbor.reveal();
        }
      }
    }
  }
}

Cell.prototype.mark = function(){
  if(!this.marker){
    this.marker = true;
  }else{
    this.marker = false;
  }
}
