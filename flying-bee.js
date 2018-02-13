
/*
   TODO: add fall/fly porportinal to speed
   TODO: add ground spikes
   TODO: and holes in the ground
   TODO: add quit
   TODO: finish setings
   FIXME: fix low health flash
*/


/*
GUINEA PIG FUNTION:

background(255,255,255);
fill (255, 180, 55);
ellipse(300,145,125,125);
ellipse(175,200,265,165);
fill(0,0,0);
ellipse(335,125,35,35);
textSize(25);
text("GUINEA PIG:",20,35);
textSize(21);
text( "the best animal ever!",180,35);
*/
//var resetSets = function(){
var gset = [
    [],
  true,  //rain:0
  true, //clouds:1
  true,  //flap:2
  true,  //altitude:3
  true,  //fog: 4
  true,//spikes:5
  true,//ground:6
  true,//celing:7
  true,   //bestScore:8
  true,//rulesTab: 9
  true,//pollen:10
  true,  //redScreen11:
  true,//randHealth: 12
  true,  //speed:13
  15, //speedMax:14
  [false,0],//setSpeed:15
  false,//instDie:16
  [255,255,0],  //beeColor:17
  true,  //stats:18
  true,//death:19
  true,//lazers: 20
  true,//shealds:21
  true,  //beeDesign:22
  3,//gravity: 23
  2,//upSpeed:24
  false,//byIsMouse:25
  1,//lang: 26
  true, //resetButton:27
  true,  //note:28
  false, //centerSetings:29
  true, //2xhp 30
  true //poles 31
];
var langs = ["eng"];
//};
//resetSets();
var reset=function(cheet)
{
var inst=false;
var j=0;
var backg=true;
var score=0;
var scorekeeper=function(spl){
if(spl>score){score=spl;}
return score;
};
var settogbit=true;
var setmouse=0;
var sety=65;
var setypre=65;
var spset=["Reset setings","Toggle rain","Toggle clouds","Toggle wing flap","Show altitude","Toggle cloud fog","Toggle faling spikes","Toggle ground","Toggle hieght celing","Show best score","Show rules tab","Toggle polen","Red damage screen","Randome health boost","Show speed","Set max speed","Set constant speed","Toggle instant death","Set bee color","Remove all stats","Toggle imortality","Toggle lazers","Toggle shealds","Toggle bee design","Set gravity","Set flight (up) speed","Toggle interface","Language","Show reset button","Show pollen note","Center setings button","Toggle 2x health boost","Toggle moving poles"];
var run=function(){
var setings=false;//=false;
var speed=8;
var cloud=250;
var closeR=false;
var g = {
 wing: 1,
 act: true,
 points: 0,
 dy: false,
 life: 100,
 by:200,
 x: 0,
 y: 200,
 flap: 0,
 pr: 0,
 power:false,
 sbc: 0,
 sco: 0,
 si: 4,
 pc: 1,
 pss: false,
 psst: 20,
 xcoin: [300,300,300,300,300,300],
 ycoin: [200,200,200,200,200,200],
 chh: false,
 lzc: 4,
 l1: 0,
 l2: 0,
 lact:false,
 lzv:true,
 destroy: false,
 kr: true,
 coinpoints:0,
 bar1: 0,
 barcon:0,
 bar2: 0,
 sheald: false,
 lzk: 0,
 srqo:0,
 ldp:3,
 numcount:0,
 lec: false,
 descolr: 0,
 descolg: 255,
 hl: 100,
 shc: 0,
 st: false,
 pause: false,
 bpi: false,
 triy: 0,
 trix: 225,
 spd: false,
 rescount: 0,
 hf: false,
 hfc: 0,
 hfct: 0,
 fall: false,
 xgm: 0,
 clco: 0,
 clco2: 0,
 rx: [0,0,0,0,0],
 ry: 100,
 ryc:0,
 ry2: 100,
 ry3: 100,
 rules: false,
 rtc:0,
 cly: 50
};
  draw=function(){
    if(!g.chr){
    }
      //<setings>
      if(!gset[1]){g.clco=0;}
      if(!gset[3]){g.wing=0;}
      //<setings>
      if(mouseX<50 && mouseY>350){g.pause=true;}
      else {g.pause=false;}
    if(!g.pause){
     if(mouseIsPressed){g.fall=false;}
      g.st=false;
     if(g.sheald){g.shc++;g.st=true;}
     if(g.shc>500){g.sheald=false;g.shc=0;}
     if(speed>=16){speed=15;}
     g.descolr=0;
     g.descolg=255;
      g.barcon++;
      if(g.barcon>=1 && g.bpi){g.barcon=0;g.bar1++;}
      if(g.bar1>=100 && speed>=0){g.bar2+=5;}
      if(g.bar1>=100){g.bar1=0;}
      if(g.bar2>=100){g.bar2=0;g.lzc+=round(random(1,3));
      g.sheald=true; speed++; g.life=2*g.life;
      }
      g.power=false;
      var rto;
      if (g.sco===0){speed=cheet;}
      g.sco++;
    if (g.pr>8) {g.power=true; g.pr=0;}
    if (mouseIsPressed) {fill(255,0,0); g.wing=0-g.wing;}
    if (g.x===-65) {g.y=random(120,280);}
    if (g.life<=0 || closeR) {g.rtc++;
        background(65, 255, 0);fill(255,255,255);text("game over, you scored "+ g.points*speed +" points!", 45, 200);g.act=false;textSize(25);
if(g.act===false){text("best score: "+scorekeeper(
    g.points*speed),125,170);}
    text("click to play again!",105,235);
    }

    else if (g.dy && g.st===false && g.destroy===false || g.spd ) {background(255, 0, 0);fill(184, 40, 52);rect     (115,50,170,50); g.descolr=255;g.descolg=0;}
    else {background(72, 255, 0);}
     fill(230, 40, 200);
    if(g.life<=15){if(g.hf){fill(255,0,0);} else{fill(255,255,50);}
    if(!g.hf){g.hfc++;}
    if(g.hfc>8){g.hf=true;g.hfc=0;}
    if(g.hf){g.hfct++;}
    if(g.hfct>8){g.hf=false;g.hfct=0;}
    }
     g.triy+=4;
    fill(255, 0, 0);
    if(!closeR){
    triangle(g.trix+g.x,g.triy,g.trix-10+g.x,g.triy-55,
    g.trix+10+g.x,g.triy-55);}
    if(g.act){
    strokeWeight(1);
     fill(255,255,255);
    rect(g.x,0,65,g.y-100);
     rect(g.x,g.y,65,300);}
     if(gset[2]){
     if(g.clco2>0){
     stroke(0,0,255);
     strokeWeight(4);
     for(var rn=0;rn<5;rn++){
     line(g.x+cloud+g.rx[rn],50+g.ry,g.x+cloud+g.rx[rn],120+g.ry);}
     for(var rn=0;rn<5;rn++){
     line(g.x+cloud+g.rx[rn],50+g.ry2,g.x+cloud+g.rx[rn],120+g.ry2);}
     for(var rn=0;rn<5;rn++){
     line(g.x+cloud+g.rx[rn],50+g.ry3,g.x+cloud+g.rx[rn],120+g.ry3);}
     if(g.clco>0){
     for(var rn=0;rn<5;rn++){
     line(g.x+cloud+g.rx[rn]-565,50+g.ry,g.x+cloud+g.rx[rn]-565,120+g.ry);}
     for(var rn=0;rn<5;rn++){
     line(g.x+cloud+g.rx[rn]-565,50+g.ry2,g.x+cloud+g.rx[rn]-565,120+g.ry2);}
     for(var rn=0;rn<5;rn++){
     line(g.x+cloud+g.rx[rn]-565,50+g.ry3,g.x+cloud+g.rx[rn]-565,120+g.ry3);}}
     g.ryc++;
     }
     strokeWeight(1);
     g.ry+=6;
     g.ry2+=6;
     g.ry3+=6;
    if(g.ryc>90){g.ryc=0; g.ry=0;}
    if(g.ryc===30){g.ry2=0;}
    if(g.ryc===60){g.ry3=0;}
    if(g.clco2===0 ||g.clco2===-1){
    fill(255,255,255);}
    if(g.clco2===1){
    fill(139, 181, 176);}
    if(g.clco2===2){
    fill(100, 100, 100);}
    noStroke();
    ellipse(g.x+60+cloud,g.cly,70,60);
    ellipse(g.x-60+cloud,g.cly,70,60);
    ellipse(g.x+cloud,g.cly,125,100);
    if(g.clco===0 ||g.clco===-1){
    fill(255,255,255);}
    if(g.clco===1){
    fill(139, 181, 176);}
    if(g.clco===2){
    fill(100, 100, 100);}
    ellipse(g.x+cloud-505,g.cly,70,60);
    ellipse(g.x+cloud-625,g.cly,70,60);
    ellipse(g.x+cloud-565,g.cly,125,100);
    if(g.by<125 && g.x+cloud<275 &&g.x+cloud>125){if(false){g.life--;}

    if(g.clco===1){
    background(140,180,175);}
    if(g.clco===2){
    background(100, 100, 100);}
    }}
    if(g.by>400){g.life--;}
    stroke(0,0,0);
    textSize(20);
    fill(230, 40, 200);
    if (g.act){text(g.life+"% health remaining",5,20);  fill(194, 185, 10);
     fill(230, 40, 200);
     text(speed+"x  "+g.points+" points",290,20);
     g.spd=false;
     if (g.st) {stroke(0,0,255);fill(0,255,0);ellipse(197,g.by-10,135,75);stroke(0,0,0);}
     g.bpi=false;
     keyReleased=function(){g.l1=0;g.l2=0;g.kr=true;};
     if(g.x>250){g.kr=true;}

    if(g.l2<=g.x+55 && g.kr !== true){g.destroy=true;
    }
    if(g.kr !==true)
    {g.lec=true;}
    if(g.lec){noStroke();fill(g.descolr,g.descolg,0); rect(g.x,g.ldp-40,75,80);g.numcount++;}
    if(g.numcount<speed){g.ldp=g.by;}
     fill(255, 208, 0);
    rect(5,200-g.bar1,25,g.bar1);
    fill (80, 40, 225);
    rect(35,200-g.bar2,25,g.bar2);
    if(g.trix+g.x>=150 && g.trix+g.x<=250 && g.triy>=g.by-35 && g.triy<=g.by+35){g.spd=true;}
    if (g.wing===-1){fill(0, 0, 0);rect(192,g.by-35,20     ,20);}
    if(g.by>375 &&! mouseIsPressed) {noStroke();g.fall=true;g.wing=-1;g.xgm++;fill(255,150,0);triangle(135,395,180,395,175,375);
}
    strokeWeight(1);
    stroke(0,0,0);
    fill(0, 0, 0);
    line(200,g.by,258,g.by);
    fill(255, 255, 0);
    ellipse(200,g.by,65,50);
    ellipse(165,g.by-15,45,45);
    fill(0,0,0);
    ellipse(158,g.by-23,10,10);
    if(!g.fall)
    {g.x+=speed;}
    g.lact=true;
    if (keyIsPressed && g.lact && g.lzc>0) {
        strokeWeight(8);
        stroke(255, 0, 0);
        g.lact=false;
        g.kr=false;
        if(g.lzv){g.lzc--;}
        g.lzv=false;
        line(250+g.l1,g.by,300+g.l2,g.by);
    }
    stroke(0,0,0);
    strokeWeight(1);
    fill(255,150,0);
     rect(-5,390,410,15);
     fill(255, 150, 0);
    ellipse(g.x+32,395,85,30);
    noStroke();
    rect(g.x-11,390,86,40);
    stroke(0,0,0);
    fill(0,0,0);
    noStroke();
    fill(0, 80, 0);
    rect(295,350,150,100);
    fill(255, 0, 0);
    text(g.lzc+" lazers",310,380);
    g.l1-=6;
    g.l2-=6;
   if(keyIsPressed===false){g.lzv=true;}
    if(g.destroy){g.lzk --;}
    stroke(0, 0, 0);
    strokeWeight(1);
    if (g.x>500){g.x=-65;g.pr=random(0,9); g.pc=1;g.destroy=false;g.lec=false;g.numcount=0;
    g.trix=random(155,350);
    g.triy=-75;
    g.ry=0;
    }
    if(g.x+cloud===500){g.rx=[random(75,-75),random(75,-75),random(75,-75),random(75,-75),random(75,-75)];}
    if(g.x>160 && g.x<161+speed){g.clco=round(random(-1,2));
}
if(g.x>400 && g.x<401+speed){g.clco2=g.clco;}
    if (g.x>=282 && g.pc===1){g.points++; g.pc=0;}
    if(g.by<18){g.by++;}
    else{if (mouseIsPressed){g.by-=4;}if(!g.fall){g.by+=2;}}
    g.dy=false;
    if(g.by>375 &&! mouseIsPressed) {
    noStroke();
    fill(255,150,0);
    rect(145,389,25,2);
    stroke(0,0,0);}
    if(g.xgm>=2*speed){g.x++;g.xgm=0;}
    if (g.x<265 && g.x>135 && g.ldp<=g.by+40 &&
    g.ldp>=g.by-40)
    {if(g.by>g.y||g.by+100<g.y) {g.dy= true;}
    if (g.dy && g.st===false && g.destroy===false || g.spd ) {g.life-=2;}}
    if(g.wing===-1){g.flap++;}
    if (g.flap>=6){g.wing=1;}
    if(g.flap>=7){g.flap=0;}
     if(g.power) {g.life+=round(160*1/(speed*speed));g.pss=true;}
    if(g.pss) {
    textSize(25);fill(0, 0, 255);text(
    "randome health boost "+round(160*1/(speed*speed))+"%",60,120);}

    if(g.x<=speed){g.chh=true;}
    for(var v=0;v<7;v++)
    {if(g.x>445 && g.chh){
    {
    g.xcoin[v]=(35*v)+random(15,55);
    g.ycoin[v]=random(0,400);
    }
    g.chh=false;
    }}
    fill(230, 189, 9);
    for (var ecc=0;ecc<g.xcoin.length;ecc++)
    {ellipse(g.x-g.xcoin[ecc],g.ycoin[ecc],40,40);
    if(g.ycoin[ecc]<g.by+50 && g.ycoin[ecc]>g.by-50 &&   g.x<=400-g.xcoin[ecc]){g.bpi=true;}

    }
     strokeWeight(5);
    fill(0, 45, 255);
      rect(-7,340,67,67);
      fill(255, 255, 255);
      rect(10,350,15,40);
      rect(35,350,15,40);
    strokeWeight(1);
    fill(255, 0, 0);
    textSize(20);
    if(gset[4]){
    if(round(600/179*(376-g.by))>=1200){
        text("1200 inches",160,75);
    }
    else {text(round(600/179*(376-g.by))+" inches",160,75);}}
    g.sbc+=speed;
    if(g.sbc>=500*g.si) {g.sbc=0;speed++;}}
    else if (mouseIsPressed && mouseY>90 &&!g.rules&&g.rtc>20&&!setings) {run();}
    if (g.pss) {g.psst--;}
    if (g.psst<=0){g.pss=false;}
    if(g.power){g.psst=75;}
    if(g.act){textSize(12);
    fill(255, 255, 150);
    rect(2,205,95,90);
    fill(255, 0, 0);
    text("if blue bar is full:",3,215);
    fill(0,0,255);
    text(" +1-3 lazers",5,230);
    text(" +1 sheld",5,245);
    text(" +1x multiplyer",5,260);
    text(" 2x health",5,290);
    text(" +1x speed boost",5,275);
    fill(255,255,255);
    fill(255, 150, 0);
    }
    if(!g.act || closeR){fill(222, 197, 98);rect(150,-10,100,35,100);fill(0,0,0);text("~rules~",166,18);
    if(mouseX>150 && mouseX<250 && mouseY<25 && mouseIsPressed){inst=true;}
    fill(255, 0, 0);
    strokeWeight(3);
    rect(-5,345,410,60);
    strokeWeight(1);
    fill(0, 0, 0);
    text("RESET BEST SCORE ("+score+")",80,380);
    if(mouseIsPressed && mouseY>=345&&!setings){reset(1);}
    fill(220,220,250);
    rect(g.x+cloud-51,25,100,50,10);
    cloud=mouseX-g.x;
    fill(0, 0, 0);
    textSize(20);
    text("setings",g.x+cloud-35,60);
    if(mouseY<75 && mouseIsPressed && mouseY>20){
 setings=true;
}
if(closeR){inst=false;g.rules=false;}
    }
    if(inst &&!closeR){background(210,200,100);textSize(20);fill(0,0,0);text("the rules!",150,50); fill(60, 175, 45);
    g.rules=true;
    rect(145,350,100,40,100);fill(0,0,0);text("~play~",165,375);
    if(mouseIsPressed && mouseY<=350&&g.rtc>200){run();}
    if(mouseY >230 && mouseY <300 && mouseX <125){
    fill(210,200,100);rect(20,245,105,90);
    fill(0, 0, 0);
    }
    if(mouseY >230 && mouseY <300 && mouseX >275){
    fill(210,200,100);rect(275,245,115,90);
    fill(0,0,0);
    }
    textSize(14);
    text("in this game you will be a bee.",90,75);
    text("try not to die from the falling spikes, or crash into",50,90);
    text("the white poles. collect pollen to fill up the yellow and",50,105);
    text("blue bars. if the the blue bar fills up you can get: lazers,",50,120);
    text("shealds, and health boosts. lazers can be used to brake",50,135);
    text("the poles, and shealds can be used to stop damage.",50,150);
    text("as you progress, it will get faster. there is also a",50,165);
    text("one in ten chance to get a randome health boost,",50,180);
    text("which will get smaller as you travel. be carefull not to , ",50,195);
    text("enter a cloud. if you do, it will block you vission",50,210);
    text("the objective is to score as many points as possible.",50,225);
    text(" HAVE FUN!",160,240);
    textSize(20);
    text("^close^",305,280);
    text("^close^",35,280);
    text("rules",315,300);
    text("rules",45,300);
    fill(0,255,0);
    rect(125,245,150,90);
     stroke(0,0,0);
    fill(0, 0, 0);
    line(200,295,258,295);
    fill(255, 255, 0);
    ellipse(200,295,65,50);
    ellipse(165,295-15,45,45);
    fill(0,0,0);
    ellipse(158,295-23,10,10);
    if(mouseIsPressed && mouseY>230 && mouseY<300 && (mouseX<125||mouseX>275)){closeR=true;g.rtc=0;}
    else{closeR=false;}
    }
    backg=false;
    if(setings){
    if(!mouseIsPressed){settogbit=true;}
    g.act=false;
    background (175, 175, 175);
    if(mouseIsPressed && setypre>mouseY){
    sety-=6; setypre=mouseY;}
    if(mouseIsPressed && setypre<mouseY){
    sety+=6; setypre=mouseY;}
    if(sety>54){sety=55;}
    setmouse=-sety+mouseY;
    for(var setbox=0;setbox<33;setbox++){
    fill(135, 125, 125);
    if(gset[setbox]===false){fill(175,0,0);}
    if(gset[setbox]===true){fill(0,175,0);}
    rect(64,sety+65*setbox,300,55);
    fill(0, 0, 0);
    textSize(25);
    text(spset[setbox],85,sety+35+65*setbox);
    //14,15,17,23,24,26,
    //14,23,24,25
    if(
    settogbit &&
    mouseIsPressed &&
    setbox!==0 &&
    setbox!==15 &&
    setbox!==16 &&
    setbox!==18 &&
    setbox!==24 &&
    setbox!==25 &&
    setbox!==27 &&
    mouseX>65 &&
    setmouse>(65*setbox) &&
    setmouse<65+(65*setbox)){
    settogbit=false;
    gset[setbox]=!gset[setbox];
    }
    }
    fill(135, 125, 125);
    rect(65,5,95,30);
    fill(0,0,0);
    textSize(20);
    text("Setings:",75,25);
    if(mouseX>350){run();}
      }
    if(g.rules &&!closeR&&!setings){
    fill(0, 0, 0);
    textSize(9);
text("by c. tam the guinea pig",300,395);
    textSize(22);}
    if(!g.act &&! g.rules || closeR &&!setings){
    fill(0, 0, 0);
    textSize(9);
text("by c.t. guinea",345,395);
    textSize(22);}
    return g.points*speed;
    }
  };return draw();
};
run();
};
reset(1);
