let j;
function setup() {
  // put setup code here
  createCanvas(400,200)
  j=0
  
}

function draw() {
  // put drawing code here
  background(255,192,203);
  line(200,0,200,200);

  //gambar spongebob sebelah kiri
  //badan 
  strokeWeight(1)
  fill(255,255,0)
  rect(50,60,83,80, radians(350), radians(350))
  fill(150,75,0)
  rect(48,130,88,38, radians(200), radians(100))

  //mata
  strokeWeight(1)
  fill(255,255,255)
  ellipse(80,90,20,25)
  ellipse(100,90,20,25)
  fill(0,255,255)
  ellipse(80,90,10,15)
  ellipse(100,90,10,15)
  strokeWeight(5)
  point(82,90)
  point(98,90)


  //mulut
  strokeWeight(1)
  fill(255,255,255)
  rect(78,110,25,15)
  strokeWeight(1)
  fill(255,255,255)
  rect(85,110,5,5)
  fill(255,255,255)
  rect(90,110,5,5)

  //tangan
  strokeWeight(2)
  line(50,130,30,165)
  line(135,130,150,165)
  
    
  //baju
  fill(255,0,0)
  rect(48,140,20,10)
  fill(128,128,0)
  rect(58,140,15,10)
  fill(255,255,255)
  rect(68,140,15,10)
  fill(252,280,99)
  rect(78,140,15,10)
  fill(300,40,2)
  rect(88,140,15,10)
  fill(191,0,255)
  rect(98,140,20,10)
  fill(0,0,0)
  rect(108,140,18,10)
  fill(255,127,0)
  rect(118,140,15,10)
  fill(0,255,0)
  rect(118,140,18,10)

//perulangan

for (var i=1; i<=400; i++){
  x=i
  y=300+ 20*Math.sin(PI*x/20)
  point(x,y)
}

j+=1

//gambar spongebob sebelah kanan
//badan 
strokeWeight(1)
fill(255,255,0)
rect(250,60,83,80, radians(350), radians(350))
fill(150,75,0)
rect(248,130,88,38, radians(200), radians(100))


//mata
var m=200+20*Math.sin(PI*j/10)
var m1=90+2*Math.sin(PI*j/10)
strokeWeight(1)
fill(255,255,255)
ellipse(280,90,20,25)
ellipse(300,90,20,25)
fill(0,m,255)
ellipse(280,90,10,15)
ellipse(300,90,10,15)
strokeWeight(5)
point(282,m1)
point(298,m1)

//mulut
strokeWeight(1)
fill(255,255,255)
rect(278,110,25,15)
rect(285,110,5,5)
rect(290,110,5,5)

//baju
var b=200+20*Math.sin(PI*j/10)
var b1=100+15*Math.sin(PI*j/10)
var b2=210+20*Math.sin(PI*j/10)
var b3=235+15*Math.sin(PI*j/10)
var b4=255+20*Math.sin(PI*j/10)
var b5=140+15*Math.sin(PI*j/10)
var b6=210+20*Math.sin(PI*j/10)
var b7=200+15*Math.sin(PI*j/10)
fill(b,0,0)
rect(248,140,20,10)
fill(b1,128,0)
rect(258,140,15,10)
fill(b2,255,255)
rect(268,140,15,10)
fill(b3,280,99)
rect(278,140,15,10)
fill(b4,40,2)
rect(288,140,15,10)
fill(b5,0,255)
rect(298,140,20,10)
fill(0,0,0)
rect(308,140,18,10)
fill(b6,127,0)
rect(318,140,15,10)
fill(0,b7,0)
rect(318,140,18,10)

//tangan
var t=120+20*Math.cos(PI*j/10)
strokeWeight(2)
line(250,130,230,t)
line(335,130,350,t)
  }