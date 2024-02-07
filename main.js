 x=0;
 y=0;

 drawcircle="";
 drawrect="";

 var SpeechRecognition=window.webkitSpeechRecognition;
 var Recognition=new SpeechRecognition();

 function start(){
    document.getElementById("status").innerHTML="o sistema esta ouvindo. por favor fale";
    Recognition.start();
 }

 Recognition.onresult=function (event){
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="a fala foi reconhecida com:"+content;
    if(content=="círculo"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="desenhando um circulo";
        drawcircle="set";
    }
    if(content=="retângulo"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="desenhando um retangulo";
        drawrect="set";
    } 
 }

 function setup() {
canvas=createCanvas(900,600)
 }

 function draw() {
    if( drawcircle=="set"){
        radius= Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML= "circulo desenhado";
        drawcircle="";
    }
    if( drawrect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML= "retangulo desenhado";
        drawrect="";
    }
 }