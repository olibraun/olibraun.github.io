rec = function(x,y){
  this.pos = createVector(x,y);
  this.value = 0;
  this.displayValue = 0;
  this.displayActive = false;
  this.targetReached = false;

  this.setValue = function(n){
    this.value = n;
  }

  this.checkTarget = function(n){
    if(n == this.value){
      this.targetReached = true;
    }else{
      this.targetReached = false;
    }
  }

  this.isTargetReached = function(){
    return this.targetReached;
  }

  this.hits = function(x,y){
    let X = this.pos.x;
    let Y = this.pos.y;
    return (abs(X-x) < 26 && abs(Y-y) < 26);
  }

  this.displayCurrent = function(n){
    this.displayValue = n;
    this.displayActive = true;
    this.timer = 70;
  }

  this.update = function(){
    if(this.timer > 0){
      this.timer--;
    }else{
      this.displayActive = false;
    }
  }

  this.show = function(){
    if(!this.targetReached){
      //Grau
      stroke(179, 179, 204);
    }else{
      //Gelb
      stroke(244, 235, 66);
    }

    strokeWeight(3);
    noFill();
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,50,50);

    if(!this.targetReached){
      //Schrift weiß
      fill(255);
    }else{
      //Schrift gelb
      fill(244, 235, 66);
    }

    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    textStyle(NORMAL);
    if(!this.displayActive){
      text(str(this.value),this.pos.x,this.pos.y);
    }else{
      text("="+str(this.displayValue),this.pos.x,this.pos.y);
    }
  }
}
