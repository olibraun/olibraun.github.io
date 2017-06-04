var base;
var branches=[];
var temp;

function setup() {
  createCanvas(400,400);
  a = createVector(width/2,height);
  b = createVector(width/2,height-100);
  var branch1 = new Branch(a,b);
  branches.push(branch1);
}

function mousePressed(){
  console.log("mouse pressed");
  for(var i=branches.length-1;i>=0;i--){
    if(!branches[i].branched){
      branches.push(branches[i].leftBranch());
      branches.push(branches[i].rightBranch());
    }
  }
  console.log(branches);
}

function draw() {
  background(51);
  for(var i=0;i<branches.length;i++){
    branches[i].show();
    //branches[i].jitter();
  }
  //console.log(branches);
}
