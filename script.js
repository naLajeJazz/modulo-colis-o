//Rpg Pixel art
//escrito por Rodrigo Melo


import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

canvas.width=screen.width;
canvas.height=screen.height;
canvas.style.backgroundColor="black";


let player = new Obj(canvas.width/2+32,canvas.height/2+32,64,64,3),
    moveR=false,
    moveL=false,
    moveU=false,
    moveD=false,
    move=false;



let tileDungeon= new Obj(canvas.width/2-240,canvas.height/2-240,480,480),
    d1=new Obj(canvas.width/2-64,canvas.height/2-246,128,8),
    d3=new Obj(canvas.width/2-64,canvas.height/2+240,128,8),
    d4=new Obj(canvas.width/2-248,canvas.height/2-64,8,128),
    d2=new Obj(canvas.width/2+240,canvas.height/2-64,8,128)
   
    ;

    let collisionUp= new Obj(0,0,canvas.width,32), collisionLeft= new Obj(0,0,32,canvas.height),
    collisionRight= new Obj(canvas.width-32,0,32,canvas.height),
    collisionDown= new Obj(0,608,canvas.width,32);

///anima Sprite
let xIndex=0
let yIndex=0
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira
let xTiles=0
let yTiles=0
let tileId=null


let playerSprite = document.createElement("IMG");
playerSprite.setAttribute("src","./assets/sp8.png");
let bck2 = document.createElement("IMG");
bck2.setAttribute("src","./assets/Dungeon2b.png");
let bck3 = document.createElement("IMG");
bck3.setAttribute("src","./assets/tile_3.png");


let c=0

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
        }else if (k=="l"){
          xTiles+=480
        }else if (k=="k"){
          xTiles-=480
        }else if (k=="i"){
          yTiles-=480
        }else if (k=="m"){
          yTiles+=480
        }
    },false);

    
   





    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);



tileDungeon.SpriteTiles(bck2,xTiles,yTiles);

if(xTiles==0 &yTiles==0){
  tileId="ts7"
  collisionUp.x=tileDungeon.x
  collisionUp.y=tileDungeon.y+16
  collisionUp.w=tileDungeon.w
  collisionDown.x=tileDungeon.x
  collisionDown.y=tileDungeon.y+456
  collisionDown.w=tileDungeon.w
}else if(xTiles==480 &yTiles==0){
  collisionUp.y=300
  tileId="ts23"
}


//Transição do sprite no tile sides
if(player.y+64<d1.y){
  yTiles-=480
  player.y=d3.y-32; 
 
}else if(player.y>d3.y-16){

  yTiles+=480
  player.y=d1.y-16
}
 if (player.x>d2.x-16){

  xTiles+=480
  player.x=d4.x-8;
}else if (player.x+32<d4.x){
  
  xTiles-=480
  player.x=d2.x-32
};
//d1.draw("red");
//d3.draw('green');
//d2.draw("blue");
//d4.draw("orange");



///anima Sprite

if (moveD){
  player.SpriteAnime(playerSprite,xIndex,yIndex)
}else if (moveL){
  player.SpriteAnime(playerSprite,xIndex,yIndex+64)
}else if (moveR){
  player.SpriteAnime(playerSprite,xIndex,yIndex+128)
}else if (moveU){
  player.SpriteAnime(playerSprite,xIndex,yIndex+192)
}
else{player.SpriteAnime(playerSprite,xIndex,yIndex+256);}

//player.draw("red")


///check collision
collisionUp.collide(player.x,player.y,player.w,player.h)
collisionLeft.collide(player.x,player.y,player.w,player.h)
collisionRight.collide(player.x,player.y,player.w,player.h)
collisionDown.collide(player.x,player.y,player.w,player.h)




///MOve player ou(move tile set)
  if(moveR &&!collisionRight.collideBolean){
     player.x+=player.spd;
     //xTiles+=player.spd
    }
  if(moveL&&!collisionLeft.collideBolean){
    player.x-=player.spd;
    //xTiles-=player.spd
  }
  if(moveU&&!collisionUp.collideBolean){
    player.y-=player.spd;
    //yTiles-=player.spd
  }
  if(moveD&&!collisionDown.collideBolean){
    player.y+=player.spd;
   // yTiles+=player.spd
  }


  
  
  collisionUp.draw("red")
  collisionLeft.draw("blue")
  collisionRight.draw("green")
  collisionDown.draw("orange")


 tileDungeon.hudMsg(tileDungeon.x,tileDungeon.y-64,`${xTiles}/${yTiles}/${tileId}`)


};
game();
