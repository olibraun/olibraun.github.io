infoScreen = function(){
  let txt = "";

  txt = txt + "RULLO CLONE" +"\n";
  txt = txt +"\n";
  txt = txt +"\n";
  txt = txt + "Deactivate circles by clicking in order to"+"\n";
  txt = txt + "achieve the target numbers in the squares." + "\n";
  txt = txt + "" + "\n";
  txt = txt + "A long click on a circle will lock it in its state." + "\n";
  txt = txt + "That way it can no longer be (de-)activated." + "\n";
  txt = txt + "" + "\n";
  txt = txt + "A finished row/column has its square yellow." + "\n";
  txt = txt + "A click on a finished square will lock or" + "\n";
  txt = txt + "unlock the entire row/column." + "\n";
  txt = txt + "" + "\n";
  txt = txt + "Clicking on an unfinished square will" + "\n";
  txt = txt + "reveal the sum of currently active" + "\n";
  txt = txt + "circles in the respective row/column." + "\n";
  txt = txt + "" + "\n";
  txt = txt +"\n";
  txt = txt + "Please click to continue.";

  this.show = function(){
    fill(98, 155, 247);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    textStyle(NORMAL);
    text(txt,width/2,height/2);
  }
}
