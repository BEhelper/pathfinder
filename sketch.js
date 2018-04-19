//new

var cols = 5;
var rows = 5;
var grid = new Array(cols)

var openSet = [];
var closedSet = [];

var start;
var end;

var w, h;

function Spot(i , j) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.show = function() {
    fill(255);
    // stroke(0);
    noStroke();
    rect(this.x * w, this.y * h, w-1, h-1)
  }
}

function setup() {
  createCanvas(400,400);
  console.log("a star");

  w = width / cols;
  h = height / rows;

  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; i < rows.length; i++) {
      grid[i][j] = new Spot(i , j);
    }
  }

  start = grid[0][0];
  end = grid[cols - 1][rows - 1]

  openSet.push(start)

  console.log(grid);
}


function draw() {

  if (openSet.length > 0) {
    // we keep going
  }else {
    //no solution
  }
  background(0);

  for (var i = 0; i < cols; i++) {
    for (var j = 0; i < rows; i++) {
      grid[i][j].show(color(255));
    }
  }

  for (var i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255,0,0))
  }
  for (var i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0,255,0))
  }
}
