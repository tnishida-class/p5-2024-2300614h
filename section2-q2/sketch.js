// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
     if ((i+j)%2===1){
      fill(100);
      rect(size*i, size*j, size, size)};
     if (((i+j)%2===1)&&(j<3)){
      fill(255,0,0);
      ellipse(size*i+size/2,size*j+size/2,size/2+5)};
      if (((i+j)%2===1)&&(j>4)){
        fill(0);
        ellipse(size*i+size/2,size*j+size/2,size/2+5)};
    }
  }
}
