winScreen = function(){
  this.show = function(){
    fill(0, 255, 0);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(35);
    text("You win, congratulations!\nPlease click to play again.",width/2,height/2);
  }
}
