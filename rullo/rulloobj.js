rullo = function(){
  this.myGrid = make2DArray(7,7);
  this.x_offset = 38;
  this.y_offset = 65;

  //Initialize num objects into grid
  for(let i=1; i < 6; i++){
    for(let j=1; j < 6; j++){
      this.myGrid[i][j] = new num(i*70 + this.x_offset,j*70 + this.y_offset);
    }
  }
  //Initialize rectangles into grid
  //Top and bottom rows
  for(let i = 1; i < 6; i++){
    this.myGrid[i][0] = new rec(i*70 + this.x_offset,0*70 + this.y_offset);
    this.myGrid[i][6] = new rec(i*70 + this.x_offset,6*70 + this.y_offset);
  }
  //Left and right columns
  for(let j = 1; j < 6; j++){
    this.myGrid[0][j] = new rec(0*70 + this.x_offset,j*70 + this.y_offset);
    this.myGrid[6][j] = new rec(6*70 + this.x_offset,j*70 + this.y_offset);
  }

  this.initialize = function(){
    //Fill the Rullo with random target numbers
    //About 16 out of 25 should be sufficient
    //Also: Have them be unlocked and active upon initialization (crucial for re-initialization)
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        if(random(25)<16){
          this.myGrid[i][j].setValue(floor(random(1,10)));
        }else{
          this.myGrid[i][j].setValue(-1);
        }
        this.myGrid[i][j].unlock();
        this.myGrid[i][j].makeActive();
      }
    }
    //It is not guaranteed that in every row and every column there is at least one (-1)
    //Meaning that there are rows and/or columns which are already correct upon startup
    //So let's fix this
    //Check the columns first
    for(let i = 1; i < 6; i++){
      let is_ok = false;
      for(let j = 1; j < 6; j++){
        if(this.myGrid[i][j].getValue() == -1){
          is_ok = true;
          break;
        }
      }
      if(!is_ok){
        this.myGrid[i][floor(random(1,6))].setValue(-1);
      }
    }
    //Now check the rows also
    for(let j = 1; j < 6; j++){
      let is_ok = false;
      for(let i = 1; i < 6; i++){
        if(this.myGrid[i][j].getValue() == -1){
          is_ok = true;
          break;
        }
      }
      if(!is_ok){
        this.myGrid[floor(random(1,6))][j].setValue(-1);
      }
    }
    //Set the horizontal squares
    for(let i = 1; i < 6; i++){
      let res = 0;
      for(let j = 1; j < 6; j++){
        let temp_val = this.myGrid[i][j].getValue();
        if(temp_val != -1){
          res += temp_val;
        }
      }
      this.myGrid[i][0].setValue(res);
      this.myGrid[i][6].setValue(res);
    }
    //Set the vertical squares
    for(let j = 1; j < 6; j++){
      let res = 0;
      for(let i = 1; i < 6; i++){
        let temp_val = this.myGrid[i][j].getValue();
        if(temp_val != -1){
          res += temp_val;
        }
      }
      this.myGrid[0][j].setValue(res);
      this.myGrid[6][j].setValue(res);
    }
    //Replace the (-1)'s
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        let temp_val = this.myGrid[i][j].getValue();
        if(temp_val == -1){
          this.myGrid[i][j].setValue(floor(random(1,10)));
        }
      }
    }
  }

  this.checkColumns = function(){
    for(let i = 1; i < 6; i++){
      let temp_val = 0;
      for(let j = 1; j < 6; j++){
        if(this.myGrid[i][j].getActive()){
          temp_val += this.myGrid[i][j].getValue();
        }
      }
      this.myGrid[i][0].checkTarget(temp_val);
      this.myGrid[i][6].checkTarget(temp_val);
    }
  }

  this.checkRows = function(){
    for(let j = 1; j < 6; j++){
      let temp_val = 0;
      for(let i = 1; i < 6; i++){
        if(this.myGrid[i][j].getActive()){
          temp_val += this.myGrid[i][j].getValue();
        }
      }
      this.myGrid[0][j].checkTarget(temp_val);
      this.myGrid[6][j].checkTarget(temp_val);
    }
  }

  this.isRulloWon = function(){
    let won = true;
    for(let i = 1; i < 6; i++){
      won = won
          && this.myGrid[i][0].isTargetReached()
          && this.myGrid[i][6].isTargetReached()
          && this.myGrid[0][i].isTargetReached()
          && this.myGrid[6][i].isTargetReached();
    }
    return won;
  }

  this.update = function(){
    this.checkColumns();
    this.checkRows();
  }

  this.show = function(){
    //Show numbers
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        this.myGrid[i][j].show();
      }
    }
    //Show rectangles
    for(let l = 1; l < 6; l++){
      this.myGrid[l][0].show();
      this.myGrid[l][6].show();
      this.myGrid[0][l].show();
      this.myGrid[6][l].show();
    }
  }

  this.lockColumn = function(n){
    for(let i = 1; i < 6; i++){
      this.myGrid[n][i].lock();
    }
  }

  this.lockRow = function(n){
    for(let i = 1; i < 6; i++){
      this.myGrid[i][n].lock();
    }
  }

  this.mouseAction = function(){
    //Check num objects for hit and perform action
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        if(this.myGrid[i][j].hits(mouseX,mouseY)){
          if(keyIsPressed && keyCode == SHIFT){
            this.myGrid[i][j].switchLocked();
          }else{
            this.myGrid[i][j].switchActive();
          }
          break;
        }
      }
    }
    //Check rectangles for hit and perform action
    //Top and bottom rows
    for(let i = 1; i < 6; i++){
      if(this.myGrid[i][0].hits(mouseX,mouseY) && this.myGrid[i][0].isTargetReached()
      || this.myGrid[i][6].hits(mouseX,mouseY) && this.myGrid[i][6].isTargetReached()){
        this.lockColumn(i);
      }
    }
    //Left and right columns
    for(let j = 1; j < 6; j++){
      if(this.myGrid[0][j].hits(mouseX,mouseY) && this.myGrid[0][j].isTargetReached()
      || this.myGrid[6][j].hits(mouseX,mouseY) && this.myGrid[6][j].isTargetReached()){
        this.lockRow(j);
      }
    }
  }
}

function make2DArray(cols,rows){
  let arr = new Array(cols);
  for(let i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}
