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
let bck = document.createElement("IMG");
bck.setAttribute("src","./assets/sprt.png");


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
 




  
  
if (move){i.SpriteAnime(bck)}else{i.Sprite(bck)}
  

  if(moveR ){ i.x+=i.spd;}
  

  if(moveL){i.x-=i.spd}
  

  if(moveU&& move){i.y-=i.spd}
  if(moveD){i.y+=i.spd}



  
  
  //i.draw("red")
  i.hudMsg(i.x,i.y+84,"move="+move)
  //i.Sprite(bck)
 



  ctx.font = "20px Courier New";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(`
  movel= ${moveL}
  moveR= ${moveR}
  moveU= ${moveU}
  moveD= ${moveD}
  [0]= ${o[0].collideBolean}
   [1]= ${o[1].collideBolean}
    [2]= ${o[2].collideBolean}`, canvas.width/2, canvas.height-30);

};
game();