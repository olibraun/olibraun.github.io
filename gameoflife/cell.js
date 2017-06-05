function Cell(i,j){
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  this.i=i;
  this.j=j;
  this.pos = createVector(this.i*xsize,this.j*ysize);
  this.alive = false;
  this.nextalive = false;
  this.neighborCount = 0;

  // if(random(1)<0.5){
  //   this.alive = true;
  // }

  this.show = function(){
    stroke(51);
    strokeWeight(1);
    if(this.alive){
      fill(255);
    }else{
      fill(0);
    }
    rect(this.pos.x,this.pos.y,xsize,ysize);
  }

  this.countNeighbors = function(){
    var count = 0;
    for(var i = -1; i <= 1; i++){
      for(var j = -1; j <= 1; j++){
        var ii = this.i+i;
        var jj = this.j+j;
        if(ii>-1 && ii < ncols && jj > -1 && jj < nrows){
          if(!(ii == this.i && jj == this.j)){
            var neighbor = cells[ii][jj];
            if(neighbor.alive){
              count++;
            }
          }
        }
      }
    }
    this.neighborCount = count;
  }

  this.prepare = function(){
    this.countNeighbors();
    var count = this.neighborCount;
    // console.log(this.alive);
    // console.log(count);
    if(this.alive){
      if(count < 2){
        this.nextalive = false;
      }else if(count == 2 || count == 3){
        this.nextalive = true;
      }else if(count > 3){
        this.nextalive = false;
      }
    }else{
      if(count==3){
        this.nextalive = true;
      }else{
        this.nextalive = false;
      }
    }
  }

  this.update = function(){
    this.alive = this.nextalive;
  }

  this.contains = function(x,y){
    return (x > this.pos.x && x < this.pos.x + xsize && y> this.pos.y && y<this.pos.y+ysize);
  }
}
