// テキスト「キーボード操作に反応する」
let x, y;
let s;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  s = 5
}

// function draw(){
//   background(160, 192, 255);
//   ellipse(x, y, 50);
//   if(keyIsDown(LEFT_ARROW)){ x -= 5; }
//   if(keyIsDown(RIGHT_ARROW)){ x += 5; }
//   if(keyIsDown(UP_ARROW)){ y -= 5; }
//   if(keyIsDown(DOWN_ARROW)){ y += 5; }
//   if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
//   if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown("A".charCodeAt(0))){ s = 10 ;}
else{ s = 5 ;}
  if(keyIsDown(LEFT_ARROW)){ x -= s; }
  if(keyIsDown(RIGHT_ARROW)){ x += s; }
  // if(keyIsDown(UP_ARROW)){ y -= s; }
  // if(keyIsDown(DOWN_ARROW)){ y += s; }
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// let x, y;
// let s;

// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   x = width / 2;
//   y = height / 2;
//   s = 5
// }

// // function draw(){
// //   background(160, 192, 255);
// //   ellipse(x, y, 50);
// //   if(keyIsDown(LEFT_ARROW)){ x -= 5; }
// //   if(keyIsDown(RIGHT_ARROW)){ x += 5; }
// //   if(keyIsDown(UP_ARROW)){ y -= 5; }
// //   if(keyIsDown(DOWN_ARROW)){ y += 5; }
// //   if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
// //   if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }

// function draw(){
//   background(160, 192, 255);
//   ellipse(x, y, 50);
//   if(keyIsDown("A".charCodeAt(0))){ s = 10 ;}
// else{ s = 5 ;}
//   if(keyIsDown(LEFT_ARROW)){ x -= s; }
//   if(keyIsDown(RIGHT_ARROW)){ x += s; }
// if(keyIsDown(" ".charCodeAt(0))){y+=}
// // }

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
