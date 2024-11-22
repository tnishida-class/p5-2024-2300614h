let heartsArray = [];
let counter = 0;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 50; i++) {
    let heart = {
      x: random(width),
      y: random(height),
      size: 5, 
      speedX: random(1, 3),
      speedY: random(1, 3),
      color: (150, 30, 30)
    };
    heartsArray.push(heart);
  }
}

function draw() {
  background(245, 211, 208); 

  counter = 0;

  for (let i = 0; i < heartsArray.length; i++) {
    let heart = heartsArray[i];

    heart.x += heart.speedX;
    heart.y += heart.speedY;
    
    if (heart.x < 0 || heart.x > width) {
      heart.speedX *= -1;
    }
    if (heart.y < 0 || heart.y > height) {
      heart.speedY *= -1;
    }
  
    let dx = mouseX - heart.x;
    let dy = mouseY - heart.y;
    let d = dist(mouseX, mouseY, heart.x, heart.y);
    if (d < 100) {
      heart.x += dx / d * 2;
      heart.y += dy / d * 2;
      heart.color = color(225, 60, 30);  
      counter++;  
      heart.size = 7;
    } else {
      heart.color = color(150, 30, 30); 
      heart.size = 5;
    }

    stroke(0); 
    strokeWeight(3);  
    fill(heart.color);
    drawHeart(heart.x, heart.y, heart.size);
  }

  if (counter >= 5) {
    drawBackgroundHeart();
  }

  fill(0);
  textSize(32);
  stroke(0);
  strokeWeight(0);
  text("♡: " + counter + "/50", windowWidth * 3 / 4, 75);
}

function drawBackgroundHeart() {
  fill(255, 100, 100, 50);  
  noStroke();
  drawHeart( width / 2,height / 2, 30);  
}

function drawHeart(x, y, size) {
  beginShape();
  let offset = size / 2;
  for (let t = 0; t <= TWO_PI; t += 0.1) {
    let px = 16 * sin(t) ** 3;
    let py = 13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t);
    vertex(x + px * offset, y - py * offset);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
