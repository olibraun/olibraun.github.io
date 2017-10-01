gameManager = function(){
  //Properties
  let R = new rullo();
  let won = false;
  let winOverlay = new winScreen();

  //Setup
  R.initialize();

  this.update = function(){
    R.update();
    won = R.isRulloWon();
  }

  this.show = function(){
    if(!won){
      R.show();
    }else{
      winOverlay.show();
    }
  }

  this.mouseAction = function(){
    if(!won){
      R.mouseAction();
    }else{
      R.initialize();
    }
  }
}
