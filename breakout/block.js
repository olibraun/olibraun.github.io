function Block(i,j){
  this.spacing = blockspacing;
  this.w = blockwidth;
  this.h = blockheight;
  this.pos = createVector(i*(this.w+this.spacing)+this.spacing,j*(this.h+this.spacing)+this.spacing);

  this.dead = false;

  this.show = function(){
      if(!this.dead){
      fill(145);
      noStroke();
      rect(this.pos.x,this.pos.y,this.w,this.h)
    }
  }

  this.getPosition = function(){
    return this.pos;
  }
}

Block.prototype.contains = function(x,y){
  return (x>=this.pos.x && x <= this.pos.x+this.w && y>=this.pos.y && y <= this.pos.y+this.h);
}

Block.prototype.kill = function(){
  this.dead = true;
}
