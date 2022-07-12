//Rpg Pixel art
//escrito por Rodrigo Melo


import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

canvas.width=screen.width;
canvas.height=screen.height;
canvas.style.backgroundColor="black";

let devMode=false;


let customize=0,
name='',
sex='',
skin='',
eyes='',
hair='',
tshirt='',
pants='',
boots='';

let tileDungeon= new Obj(canvas.width/2-240,canvas.height/2-240,480,480),
    d1=new Obj(canvas.width/2-64,canvas.height/2-246,128,8),
    d3=new Obj(canvas.width/2-64,canvas.height/2+240,128,8),
    d4=new Obj(canvas.width/2-248,canvas.height/2-64,8,128),
    d2=new Obj(canvas.width/2+240,canvas.height/2-64,8,128)
   
    ;

    let player = new Obj(tileDungeon.x+138,canvas.height,64,64,3),
    moveR=false,
    moveL=false,
    moveU=false,
    moveD=false,
    move=false;

    
let collisionUp= new Obj(0,0,canvas.width,32),
    collisionLeft= new Obj(0,0,32,canvas.height),
    collisionRight= new Obj(canvas.width-32,0,32,canvas.height),
    collisionRight2= new Obj(canvas.width-32,0,32,canvas.height),
    collisionDown= new Obj(0,608,canvas.width,32),
    collisionDown2= new Obj(0,608,canvas.width,32);

let npcCollisionUp= new Obj(0,0,canvas.width,32),
    npcCollisionLeft= new Obj(0,0,32,canvas.height),
    npcCollisionRight= new Obj(canvas.width-32,0,32,canvas.height),
    npcCollisionDown= new Obj(0,608,canvas.width,32);

///anima Sprite
let xIndex=0
let yIndex=0
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira
let tileId=undefined
let xTiles=2400
let yTiles=0
 

///Importando imagens
let playerSprite = document.createElement("IMG");
playerSprite.setAttribute("src","./assets/sp13.png");
let playerSpritePants = document.createElement("IMG");
playerSpritePants.setAttribute("src","./assets/spPants.png");
let playerSpriteTshirts = document.createElement("IMG");
playerSpriteTshirts.setAttribute("src","./assets/spTshirt.png");
let playerSpriteBoot = document.createElement("IMG");
playerSpriteBoot.setAttribute("src","./assets/spBoot.png");
let playerSpriteHair = document.createElement("IMG");
playerSpriteHair.setAttribute("src","./assets/spHair2.png");
let bck2 = document.createElement("IMG");
bck2.setAttribute("src","./assets/Dungeon2c.png");
let bck3 = document.createElement("IMG");
bck3.setAttribute("src","./assets/spriteLightc.png");
let slime = document.createElement("IMG");
slime.setAttribute("src","./assets/slime.png");


let c=["","","","","","Onde eu estou?","Que lugar é esse?","Onde estão todos?","","","","",""];
let e="";
let f="Sala dos esqueletos"
let z=0
setInterval(()=>{e=c[Math.floor(Math.random()*c.length)];z=0},5000)

let npc= new Obj(tileDungeon.x+200,tileDungeon.y+230,64,64,1),
    npcRand=[2];
    setInterval(()=>{npcRand=[Math.floor(Math.random()*5)];npc.collideBolean=false;},3000)





                        /////Controles

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
        }else if (k=="h"){
          devMode=true
        }else if (k=="j"){
          devMode=false
        }
    },false);

    
   



                      /////Game Update

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

///tela de costumização
if (xTiles==2400&&yTiles==480){
  player.w=192;
  player.h=192;
  player.spd=0
  tileDungeon.Draw("#e2cf88")
}else{
  player.w=64;player.h=64
};


tileDungeon.SpriteTiles(bck2,xTiles,yTiles);


///Position Wall collision
if(xTiles==0 &&yTiles==0){
  tileId="ts7"
 }else if(xTiles==480 &&yTiles==0){
  tileId="ts23" 
}



if(tileId=="ts7"){
  //player collission wall position
  collisionUp.x=tileDungeon.x
  collisionUp.y=tileDungeon.y+16
  collisionUp.w=tileDungeon.w
  collisionDown.x=tileDungeon.x
  collisionDown.y=tileDungeon.y+450
  collisionDown.w=tileDungeon.w-308
  collisionDown2.w=tileDungeon.w-308
  collisionDown2.x=tileDungeon.x+310
  collisionDown2.y=tileDungeon.y+450
  collisionLeft.x=tileDungeon.x-16 
  collisionLeft.y=tileDungeon.y
  collisionLeft.h=tileDungeon.h
  collisionRight.x=tileDungeon.x+464 
  collisionRight.y=tileDungeon.y
  collisionRight.h=tileDungeon.h-352
  collisionRight2.x=tileDungeon.x+464
  collisionRight2.h=tileDungeon.h-352
  collisionRight2.y=tileDungeon.y+300
//npc collision wall position
  npcCollisionUp.x=tileDungeon.x
  npcCollisionUp.y=tileDungeon.y+16
  npcCollisionUp.w=tileDungeon.w
  npcCollisionDown.x=tileDungeon.x
  npcCollisionDown.y=tileDungeon.y+426
  npcCollisionDown.w=tileDungeon.w
  npcCollisionLeft.x=tileDungeon.x+16 
  npcCollisionLeft.y=tileDungeon.y
  npcCollisionRight.x=tileDungeon.x+420  
  npcCollisionLeft.y=tileDungeon.y
 
}else if(tileId=="ts23"){
  collisionUp.y=tileDungeon.y+108
  collisionUp.x=tileDungeon.x
  collisionUp.w=tileDungeon.w

  collisionDown.y=tileDungeon.y+288
  collisionDown.x=tileDungeon.x
  collisionDown.w=tileDungeon.w-310

  collisionDown2.x=tileDungeon.x+308
  collisionDown2.y=tileDungeon.y+288
  collisionDown2.w=tileDungeon.w-310

  collisionLeft.x=tileDungeon.x+148
  collisionLeft.y=tileDungeon.y+296
  collisionLeft.h=tileDungeon.h-280
  
  collisionRight.x=tileDungeon.x+302
  collisionRight.y=tileDungeon.y+296
  collisionRight.h=tileDungeon.h-280
  
  collisionRight2.x=0
  collisionRight2.y=0
  collisionRight2.h=0
 
  
}else {
  collisionUp.x=0
  collisionUp.y=0
  collisionUp.w=0
  collisionDown.x=0
  collisionDown.y=0
  collisionDown.w=0
  collisionDown2.w=0
  collisionDown2.x=0
  collisionDown2.y=0
  collisionLeft.x=0 
  collisionLeft.y=0
  collisionLeft.h=0
  collisionRight.x=0
  collisionRight.y=0
  collisionRight.h=0
  collisionRight2.x=0
  collisionRight2.h=0
  collisionRight2.y=0
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

                     //////Draw


                     if(devMode){ 

                      d1.Draw("red",0.2);
                      d3.Draw('green',0.2);
                      d2.Draw("blue",0.2);
                      d4.Draw("orange",0.2);
                      collisionUp.Draw("red",0.2)
                      collisionLeft.Draw("blue",0.2)
                      collisionRight.Draw("green",0.2)
                      collisionRight2.Draw("green",0.2)
                      collisionDown.Draw("orange",0.2)
                      collisionDown2.Draw("orange",0.2)
                      npcCollisionDown.Draw("white",0.2)
                      npcCollisionUp.Draw("white",0.2)
                      npcCollisionLeft.Draw("white",0.2)
                      npcCollisionRight.Draw("white",0.2)
                      npc.Draw("red",0.2);
                      player.Draw("red",0.2)
                      
                      
                      }
                      
///Algoritmo de movimento de Npcs



if(tileId=="ts7"){ 
  if (!npcCollisionDown.collideBolean&& npcRand==0){
      npc.SpriteAnime(slime,xIndex,yIndex+128)
      npc.y+=npc.spd
      
  }else if (!npcCollisionUp.collideBolean&&npcRand==1){
    npc.SpriteAnime(slime,xIndex,yIndex+128)
    npc.y-=npc.spd
  }else if (!npcCollisionRight.collideBolean&&npcRand==2){
    npc.SpriteAnime(slime,xIndex,yIndex+64)
    npc.x+=npc.spd
  }else if (!npcCollisionLeft.collideBolean&&npcRand==3){
    npc.SpriteAnime(slime,xIndex,yIndex)
    npc.x-=npc.spd
  }else if (npcRand==4){
    
    npc.SpriteAnime(slime,xIndex,yIndex+128)
  }else{npc.SpriteAnime(slime,xIndex,yIndex+128)}
}
                        


///anima Sprite

if (moveD){
  
  player.SpriteAnime(playerSprite,xIndex,yIndex)
  player.SpriteAnime(playerSpritePants,xIndex,yIndex)
  player.SpriteAnime(playerSpriteBoot,xIndex,yIndex)
  player.SpriteAnime(playerSpriteTshirts,xIndex,yIndex)
  player.SpriteAnime(playerSpriteHair,xIndex,yIndex)
  
}else if (moveL){
  player.SpriteAnime(playerSprite,xIndex,yIndex+64)
  player.SpriteAnime(playerSpritePants,xIndex,yIndex+64)
  player.SpriteAnime(playerSpriteBoot,xIndex,yIndex+64)
  player.SpriteAnime(playerSpriteTshirts,xIndex,yIndex+64)
  player.SpriteAnime(playerSpriteHair,xIndex,yIndex+64)
}else if (moveR){
  player.SpriteAnime(playerSprite,xIndex,yIndex+128)
  player.SpriteAnime(playerSpritePants,xIndex,yIndex+128)
  player.SpriteAnime(playerSpriteBoot,xIndex,yIndex+128)
  player.SpriteAnime(playerSpriteTshirts,xIndex,yIndex+128)
  player.SpriteAnime(playerSpriteHair,xIndex,yIndex+128)

}else if (moveU){
  player.SpriteAnime(playerSprite,xIndex,yIndex+192)
  player.SpriteAnime(playerSpritePants,xIndex,yIndex+192)
  player.SpriteAnime(playerSpriteBoot,xIndex,yIndex+192)
  player.SpriteAnime(playerSpriteTshirts,xIndex,yIndex+192)
  player.SpriteAnime(playerSpriteHair,xIndex,yIndex+192)
}
else{
  player.SpriteAnime(playerSprite,xIndex,yIndex+256)
  player.SpriteAnime(playerSpritePants,xIndex,yIndex+256)
  player.SpriteAnime(playerSpriteBoot,xIndex,yIndex+256)
  player.SpriteAnime(playerSpriteTshirts,xIndex,yIndex+256)
  player.SpriteAnime(playerSpriteHair,xIndex,yIndex+256)

}

/*
//(light effect)Sobrepondo uma imagem sobre o sprite do player
player.Sprite(bck3,1800,1700);
*/

///check collision
collisionUp.collide(player.x,player.y,player.w,player.h)
collisionLeft.collide(player.x,player.y,player.w,player.h)
collisionRight.collide(player.x,player.y,player.w,player.h)
collisionRight2.collide(player.x,player.y,player.w,player.h)
collisionDown.collide(player.x,player.y,player.w,player.h)
collisionDown2.collide(player.x,player.y,player.w,player.h)



npcCollisionDown.collide(npc.x,npc.y,npc.w,npc.h);
npcCollisionUp.collide(npc.x,npc.y,npc.w,npc.h);
npcCollisionLeft.collide(npc.x,npc.y,npc.w,npc.h);
npcCollisionRight.collide(npc.x,npc.y,npc.w,npc.h);


 

///MOve player ou(move tile set(camera effect))
  if(moveR &&!collisionRight.collideBolean&&!collisionRight2.collideBolean){
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
  if(moveD&&!collisionDown.collideBolean&&!collisionDown2.collideBolean){
    player.y+=player.spd;
   // yTiles+=player.spd
  }

                        /////HUDS
  
  
  z+=0.3
  if(xTiles==960 && yTiles==960){
    player.hudMsg(player.x+32,player.y-z,"#bce4ef",e);
    
  }

  if (devMode){ 
npc.hudMsg(npc.x,npc.y,"white",`
collideBolean:${npc.collideBolean}`);

tileDungeon.hudMsg(tileDungeon.x,tileDungeon.y-64,"white",`
xTiles= ${xTiles}
yTiles= ${yTiles} 
npcRand= ${npcRand} 
tileId= ${tileId} 
collisionUp.x= ${collisionUp.x}`);

collisionDown.hudMsg(collisionDown.x,collisionDown.y,"yellow","1");
collisionDown2.hudMsg(collisionDown2.x,collisionDown2.y,"yellow","2");
collisionRight.hudMsg(collisionRight.x,collisionRight.y,"green","1");
collisionRight2.hudMsg(collisionRight2.x,collisionRight2.y,"green","2");

  }

  
};
game();
