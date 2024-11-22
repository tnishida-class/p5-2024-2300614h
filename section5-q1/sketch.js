// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう

function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 30, 150, 255); // (テキスト, x座標, y座標, 背景色)
}

function balloon(t,a,b,c){  //(テキスト, rectの座標, rectのy座標, 背景色)
  let w = textWidth(t); 
  let h = textAscent() + textDescent(); 
  let x = a + w*3/4;  // 吹き出しの始点のx座標
  fill(c);  //背景色
  rect(a, b, w+20, h+10, 10); 
  triangle(x, b+(h+10), x-5, b+(h+10)+10, x+5, b+(h+10)); //しっぽ
  fill(0);
  text(t, a+10, b+h);
}









// function setup(){
//   createCanvas(400, 400);
//   background(255);
//   balloon("I love keyakizaka46");
// }

// function balloon(t){
//   let w = textWidth(t);
//   let h = textAscent() + textDescent();
//   let x = w*3/4;
//   let y = 15
//   fill(255);
//   rect(0, 0, w + 10, h + y, 10);
//   triangle(x, h + y, x-5, h+y+10, x+5, h+y);
//   fill(0);
//   text(t, 5, h+5);
// }
