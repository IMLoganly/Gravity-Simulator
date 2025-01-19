let x = 50;
let y = 50;
var xSpeed = 0;
let ySpeed = 0;
var grav = 9.81/30;
let Gate = 0;
let Xcol1 = 255;
let Xcol2 = 255;
let Xcol3 = 255;
let Xback1 = 0;
let Xback2 = 0;
let Xback3 = 0;

let Ycol1 = 255;
let Ycol2 = 255;
let Ycol3 = 255;
let Yback1 = 0;
let Yback2 = 0;
let Yback3 = 0;

function setup() {
  createCanvas(800, 800);
  Reset();
}

function draw() {
  background(0);
  if(Gate ==0){
    choice();
  }
  if (key == " ") {
    Gate = 1;
  }
  if (Gate == 1) {
    display();
    Move();
    gravity();
  }
}

function display() {
  fill("rgb(4,252,231)");
  ellipse(x, y, 30, 30);
  
}
function Reset(){
  Gate=0;
  xSpeed=0;
  ySpeed=0;
  x=50;
  y=50;
}


function Move() {
  if (x > width - 15) {
    xSpeed = xSpeed * -1;
  }
  if (x < 15) {
    xSpeed = xSpeed * -1;
  }
  x = x + xSpeed;
}
function gravity() {
  ySpeed = (ySpeed - grav);
  y = y - ySpeed;
  if (y + 30 / 2 > height) {
    ySpeed = -ySpeed;
    y = height - 30 / 2;
    xSpeed = xSpeed * 0.99;
  }
  ySpeed = ySpeed * 0.971;
}

function choice() {
  textSize(30);
  text('X Speed',325,85);
  //boxes for xspeed
  fill(Xback1);
  rect(30, 95, 170, 61);
  fill(Xcol1);
  rect(40, 100, 150, 50);
  fill('black');
  text('x=15',85,130);
  
  fill(Xback2);
  rect(300, 95, 170, 61);
  fill(Xcol2);
  rect(310, 100, 150, 50);
  fill('black');
  text('x=10',350,130);

  fill(Xback3);
  rect(590, 95, 170, 61);
  fill(Xcol3);
  rect(600, 100, 150, 50);
  fill('black');
  text('x=5',650,130);

  //boxes for yspeed
  fill(Yback1);
  rect(30,395,170,61);
  fill(Ycol1);
  rect(40,400,150,50);
  fill('black');
  text('y=15',85,430);
  
  fill(Yback2);
  rect(300,395,170,61);
  fill(Ycol2);
  rect(310,400,150,50);
  fill('black');
  text('y=10',350,430);
  
  fill(Yback3);
  rect(590,395,170,61);
  fill(Ycol3);
  rect(600,400,150,50);
  fill('black');
  text('y=5',650,430);
  
  //boundaries for xspeeds
  if (mouseX < 190 && mouseX > 39 && mouseY > 100 && mouseY < 149) {
    Xback1 = "grey";
  } else {
    Xback1 = 0;
  }
  if (mouseX > 310 && mouseX < 460 && mouseY > 100 && mouseY < 149) {
    Xback2 = "grey";
  } else {
    Xback2 = 0;
  }
  if (mouseX > 600 && mouseX < 750 && mouseY > 100 && mouseY < 149) {
    Xback3 = "grey";
  } else {
    Xback3 = 0;
  }
  fill("white");
  text('X Speed = '+xSpeed,300,225);
  //boundaries for yspeeds
  if (mouseX < 190 && mouseX > 39 && mouseY > 400 && mouseY < 450) {
    Yback1 = "grey";
  } else {
    Yback1 = 0;
  }
   if (mouseX > 310 && mouseX < 460 && mouseY > 400 && mouseY < 450) {
    Yback2 = "grey";
  } else {
    Yback2 = 0;
  }
    if (mouseX > 600 && mouseX < 750 && mouseY > 400 && mouseY < 450) {
    Yback3 = "grey";
  } else {
    Yback3 = 0;
  }
   
  fill("white");
  text('Y Speed = '+ySpeed,300,525);
}

function mousePressed() {
  
  //Xspeed boundaries
  if (mouseX < 190 && mouseX > 39 && mouseY > 100 && mouseY < 149) {
    Xcol1 = "green";
    xSpeed = 15;
  } else {
    Xcol1 = 255;
  }
  if (mouseX > 310 && mouseX < 460 && mouseY > 100 && mouseY < 149) {
    Xcol2 = "green";
    xSpeed=10;
  } else {
    Xcol2 = 255;
  }
  if (mouseX > 600 && mouseX < 750 && mouseY > 100 && mouseY < 149) {
    Xcol3 = "green";
    xSpeed=5;
  } else {
    Xcol3 = 255;
  }
  
  //boundaries for yspeeds
  if (mouseX < 190 && mouseX > 39 && mouseY > 400 && mouseY < 450) {
    Ycol1 = "green";
    ySpeed = 15;
  } else {
    Ycol1 = 255;
  }
   if (mouseX > 310 && mouseX < 460 && mouseY > 400 && mouseY < 450) {
    Ycol2 = "green";
     ySpeed=10;
  } else {
    Ycol2 = 255;
  }
    if (mouseX > 600 && mouseX < 750 && mouseY > 400 && mouseY < 450) {
    Ycol3 = "green";
      ySpeed=5;
  } else {
    Ycol3 = 255;
  }

  
  
}
function keyPressed (){
  if(key =="r"){
    Reset();
  }
}


