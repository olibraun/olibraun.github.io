num = function(x,y){
  this.pos = createVector(x,y);
  this.diameter = 50;

  this.value = 0;

  this.active = true;
  this.locked = false;

  this.setValue = function(n){
    this.value = n;
  }

  this.getValue = function(){
    return this.value;
  }

  this.getActive = function(){
    return this.active;
  }

  this.switchActive = function(){
    if(!this.locked){
      this.active = !this.active;
    }
  }

  this.makeActive = function(){
    this.active = true;
  }

  this.getLocked = function(){
    return this.locked;
  }

  this.switchLocked = function(){
    this.locked = !this.locked;
  }

  this.unlock = function(){
    this.locked = false;
  }

  this.lock = function(){
    this.locked = true;
  }

  this.hits = function(x,y){
    if(pow(this.pos.x - x,2) + pow(this.pos.y - y,2) <= pow(this.diameter/2,2)){
      return true;
    }else{
      return false;
    }
  }

  this.show = function(){
    if(this.active){
      fill(255, 153, 0);
    }else{
      fill(179, 179, 204);
    }
    if(this.locked){
      stroke(255, 255, 0);
      strokeWeight(4);
    }else{
      noStroke();
    }
    ellipse(this.pos.x,this.pos.y,this.diameter,this.diameter);
    fill(255);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    textStyle(NORMAL);
    text(str(this.value),this.pos.x,this.pos.y);
  }
}
