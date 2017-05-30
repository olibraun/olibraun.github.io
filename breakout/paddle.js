function Paddle(){
  this.pos = width/2;
  this.w = 80;
  this.speed = 0;

  this.show = function(){
    fill(251);
    noStroke();
    rect(this.pos-this.w/2,paddleheight,this.w,10);
  }

  this.update = function(){
    this.pos += this.speed;
    this.pos = constrain(this.pos,this.w/2,width-this.w/2);
  }

  this.move = function(x){
    this.speed = x;
  }

  //Determine left and right end of paddle for collision Check
  this.leftx = function(){
    return this.pos-this.w/2;
  }
  this.rightx = function(){
    return this.pos+this.w/2;
  }
}

//Tastatursteuerung
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    paddle.move(-acc);
  }else if(keyCode === RIGHT_ARROW){
    paddle.move(acc);
  }
}

function keyReleased(){
  paddle.move(0);
}
