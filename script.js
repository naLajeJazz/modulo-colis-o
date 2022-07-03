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
let collisionUp= new Obj(0,0,canvas.width,32);
let collisionLeft= new Obj(0,0,32,canvas.height);
let collisionRight= new Obj(canvas.width-32,0,32,canvas.height);
let collisionDown= new Obj(0,600,canvas.width,32);
let tileDungeon= new Obj(460,160,480,480)

let bck = document.createElement("IMG");
bck.setAttribute("src","./assets/gz3c5.png");
let bck2 = document.createElement("IMG");
bck2.setAttribute("src","./assets/Dungeon2.png");
let bck3 = document.createElement("IMG");
bck3.setAttribute("src","./assets/sprt2.png");


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


tileDungeon.SpriteTiles(bck2);


///anima Sprite
if (moveR||moveL||moveU||moveD){i.SpriteAnime(bck)}else{i.SpriteAnime(bck)}

///check collision
collisionUp.collide(i.x,i.y,i.w,i.h)
collisionLeft.collide(i.x,i.y,i.w,i.h)
collisionRight.collide(i.x,i.y,i.w,i.h)
collisionDown.collide(i.x,i.y,i.w,i.h)

  if(moveR &&!collisionRight.collideBolean){ i.x+=i.spd;}
  if(moveL&&!collisionLeft.collideBolean){i.x-=i.spd;}
  if(moveU&&!collisionUp.collideBolean){i.y-=i.spd;}
  if(moveD&&!collisionDown.collideBolean){i.y+=i.spd;}


  /*
  collisionUp.draw("red")
  collisionLeft.draw("blue")
  collisionRight.draw("green")
  collisionDown.draw("orange")
*/


  



  ctx.font = "20px Courier New";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(`
  move= ${move}
  movel= ${moveL}
  moveR= ${moveR}
  moveU= ${moveU}
  moveD= ${moveD}
  i.collidebolean= ${collisionUp.collideBolean}
  `, canvas.width/2, canvas.height-30);

};
game();