function makeGlider(){
  clearall();
  cells[1][0].alive = true;
  cells[2][1].alive = true;
  cells[0][2].alive = true;
  cells[1][2].alive = true;
  cells[2][2].alive = true;
  if(gliderBox.checked()){
    cells[18][20].alive = true;
    cells[19][20].alive = true;
    cells[20][18].alive = true;
    cells[20][19].alive = true;
    cells[20][20].alive = true;
  }
}

function makeStationary(){
  clearall();
  //Quadrat
  cells[1][1].alive = true;
  cells[1][2].alive = true;
  cells[2][1].alive = true;
  cells[2][2].alive = true;

  //"Kreuz"
  cells[2][5].alive = true;
  cells[1][6].alive = true;
  cells[3][6].alive = true;
  cells[2][7].alive = true;

  //Höheres "Kreuz"
  cells[2][10].alive = true;
  cells[1][11].alive = true;
  cells[3][11].alive = true;
  cells[1][12].alive = true;
  cells[3][12].alive = true;
  cells[2][13].alive = true;

  //Schiefes Ding
  cells[2][16].alive = true;
  cells[3][16].alive = true;
  cells[1][17].alive = true;
  cells[4][17].alive = true;
  cells[2][18].alive = true;
  cells[4][18].alive = true;
  cells[3][19].alive = true;

  //"Carrée"
  cells[2][22].alive = true;
  cells[3][22].alive = true;
  cells[1][23].alive = true;
  cells[4][23].alive = true;
  cells[1][24].alive = true;
  cells[4][24].alive = true;
  cells[2][25].alive = true;
  cells[3][25].alive = true;

  //Schräges Ding
  cells[3][28].alive = true;
  cells[2][29].alive = true;
  cells[4][29].alive = true;
  cells[1][30].alive = true;
  cells[3][30].alive = true;
  cells[2][31].alive = true;
}

function makeOscillators(){
  clearall();
  var points = [];

  //Blinkes
  points.push([2,1],[2,2],[2,3]);

  //Uhr
  points.push([3,6],[3,7],[4,8],[4,9],[2,8],[5,7]);

  //Kröte
  points.push([2,12],[2,13],[2,14],[3,13],[3,14],[3,15]);

  //Bipole
  points.push([1,18],[2,18],[1,19],[2,19],[3,20],[4,20],[3,21],[4,21]);

  //Oktogon
  points.push([4,24],[5,24],[3,25],[6,25],[2,26],[7,26],[1,27],[8,27],[1,28],[8,28],[2,29],[7,29],[3,30],[6,30],[4,31],[5,31]);

  //Make
  for(var i=0; i < points.length; i++){
    var pt = points[i];
    cells[pt[0]][pt[1]].alive = true;
  }
}

function makeExplosion(){
  clearall();
  var points = [];
  //Create points
  points.push([25,20],[25,21],[25,22],[26,20],[27,20],[27,21],[27,22],[25,24],[25,25],[25,26],[27,24],[27,25],[27,26],[26,26])
  //Make
  for(var i=0; i < points.length; i++){
    var pt = points[i];
    cells[pt[0]][pt[1]].alive = true;
  }
}

function makePentomino(){
  clearall();
  var points = [];
  //Create points
  points.push([28,25],[28,26],[28,27],[29,25],[27,26]);
  //Make
  for(var i=0; i < points.length; i++){
    var pt = points[i];
    cells[pt[0]][pt[1]].alive = true;
  }
}

  function makeGliderGun(){
    clearall();
    var points = [];
    //Left square
    points.push([7,25],[8,25],[7,26],[8,26]);
    //First thing
    points.push([17,25],[17,26],[17,27],[18,24],[18,28],[19,23],[20,23],[19,29],[20,29]);
    points.push([21,26],[22,24],[22,28],[23,25],[23,26],[23,27],[24,26]);
    //Second thing
    points.push([27,23],[27,24],[27,25],[28,23],[28,24],[28,25]);
    points.push([29,22],[29,26],[31,21],[31,22],[31,26],[31,27]);
    //Right square
    points.push([41,23],[41,24],[42,23],[42,24]);
    //Make
    for(var i=0; i < points.length; i++){
      var pt = points[i];
      cells[pt[0]][pt[1]].alive = true;
    }
  }
