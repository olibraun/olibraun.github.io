gameManager = function(){
  //Properties
  let R = new rullo();
  let won = false;
  let winOverlay = new winScreen();
  this.infoButton = new myButton(width-70,height-50,"INFO");
  this.infoOverlay = new infoScreen();
  this.resetButton = new myButton(width/2,height-50,"RESET");
  this.newButton = new myButton(70,height-50,"NEW");

  this.screenState = "GAME";

  //Setup
  R.initialize();

  this.update = function(){
    R.update();
    if(R.isRulloWon()){
      this.screenState = "WON";
    }
  }

  this.show = function(){
    switch(this.screenState){
      default:
      case "GAME":
        R.show();
        this.infoButton.show();
        this.resetButton.show();
        this.newButton.show();
        break;

      case "WON":
        winOverlay.show();
        break;

      case "INFO":
        this.infoOverlay.show();
        break;
    }
  }

  this.mouseAction = function(arg){
    switch(this.screenState){
      default:
      case "GAME":
        R.mouseAction(arg);
        this.screenState = this.infoButton.hits(mouseX,mouseY) ? "INFO" : "GAME";
        if(this.resetButton.hits(mouseX,mouseY)){
          R.reset();
        }else if(this.newButton.hits(mouseX,mouseY)){
          R.initialize();
        }
        break;

      case "WON":
        R.initialize();
        this.screenState = "GAME";
        break;

      case "INFO":
        this.screenState = "GAME";
        break;
    }
  }
}
