function Branch(begin,end){
  this.begin = begin;
  this.end = end;
  this.branched=false;

  this.show = function(){
    stroke(255);
    line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }

  this.leftBranch = function(){
    console.log("Start left branch procedure.");
    //Create left branch
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(-PI/4+random(-0.4,0.4));
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var lb = new Branch(this.end,newEnd);
    return lb;
  }

  this.rightBranch = function(){
    console.log("Start right branch procedure.");
    this.branched=true;
    //Create left branch
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(PI/4+random(-0.4,0.4));
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var lb = new Branch(this.end,newEnd);
    return lb;
  }

  this.jitter = function(){
    this.end.x += random(-1,1);
    this.end.y += random(-1,1);
  }
}
