//Modulo de colisão para desenvolvimento de jogos
//escrito por Rodrigo Melo
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

let moveR=false,moveL=false,moveU=false,moveD=false,move=false;

canvas.width=screen.width;
canvas.height=screen.height;
canvas.style.backgroundColor="black";

let i = new Obj(800,350,64,64,3);
let o=[];

for(var j = 0 ; j<3 ; j++ ){

  o[j]= new Obj(400,250,64,64,0)
 
};

window.addEventListener("keyup",()=>{
    moveL=false;
    moveR=false;
    moveU=false;
    moveD=false;
    move=false;
},false);

window.addEventListener("keydown",function(event){

        let k= event.key;
 
        if (k == "d" ){
            moveR=true;
              move=true  
        }else if(k =="a" ){
            moveL=true;
            move=true
            
        }else if (k=="w"){
          moveU=true;
          move=true
        }else if (k=="s"){
          moveD=true;
          move=true
        }
    
    },false);

function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);
 
if(moveR){i.x+=i.spd}
if(moveL){i.x-=i.spd}
if(moveU){i.y-=i.spd}
if(moveD){i.y+=i.spd}



  
  for(var j = 0 ; j<3 ; j++ ){

    o[j].draw("blue")
    o[j].x=200*j+400
    o[j].collide(i.x,i.y,i.w,i.h)
  
    if(o[j].collideBolean){
      o[j].hudMsg(o[j].x,o[j].y-64,"Hey!")
      i.hudMsg(i.x,i.y-32,"Ola!")
    }
    
    
  }


  i.draw("red")
  i.hudMsg(i.x,i.y+84,move)

  ctx.font = "30px Courier New";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(`
  [0]= ${o[0].collideBolean}
   [1]= ${o[1].collideBolean}
    [2]= ${o[2].collideBolean}`, canvas.width/2, canvas.height-30);

};
game();