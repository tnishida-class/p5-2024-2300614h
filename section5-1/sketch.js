// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう

function setup(){
  createCanvas(200, 200);
  background(42,132,229);
  noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;  //星の位置：円を12分割
    let x = 100 + cos(theta) * 50;  //円の中心(100,100)
    let y = 100 + sin(theta) * 50;
    fill(249,212,65);
    star(x, y, 10); // (x,y):星自体の座標
  }
}

function star(cx, cy,r){
  beginShape();
   for (let i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;  // -π/2で頂点の位置を調整
      let x = cx + cos(theta) * r; // (x,y):一つ一つの星の頂点
      let y = cy + sin(theta) * r;
      vertex(x,y);  //頂点を追加
   }
  endShape(CLOSE);
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
  