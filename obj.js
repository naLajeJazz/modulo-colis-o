//Rpg Pixel art
//escrito por Rodrigo Melo
export const canvas = document.getElementById("Canvas");
export const ctx = canvas.getContext("2d");




export default class Obj {
  constructor(x, y, w, h, spd) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
   
    this.spd = spd
    

  };
  Draw(color,alpha){
    ctx.save()
    this.color=color
    ctx.globalAlpha = alpha;
    ctx.fillStyle =color;
    ctx.fillRect(this.x, this.y, this.w,this.h);
    ctx.restore()
  };
  DrawRect(color,lineWidth){
    ctx.beginPath();
    ctx.lineWidth =lineWidth;
    ctx.strokeStyle = color;
    ctx.rect(this.x, this.y, this.w,this.h);
    ctx.stroke();
  };
  DrawCicle(radius,sAngle,eAngle){
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, sAngle, eAngle);
    ctx.stroke();
  };
  Shadow(color,blur){
    
    ctx.shadowBlur = blur;
    ctx.shadowColor = color;
    
  }

   collide(hitX,hitY,hitW,hitH){
    this.collideBolean = false;
    this.hitX=hitX;
    this.hitY=hitY;
    this.hitW=hitW;
    this.hitH=hitH;
if(this.x<=this.hitX+this.hitW&&this.x+this.w>=this.hitX&&this.y+this.h>=this.hitY&&this.y<=this.hitY+this.hitH)
{this.collideBolean=true}else{this.collideBolean=false}

}; 

hudMsg(msgX,msgY,msgColor,msg){
this.msgX=msgX;
this.msgY=msgY;
this.msgColor=msgColor;
ctx.save()
ctx.font = "18px Comic Sans MS";
ctx.fillStyle = msgColor;
ctx.textAlign = "center";
ctx.fillText(msg, this.msgX, this.msgY);
ctx.restore()
}

Sprite=(img,spw,sph)=>{
  this.spw = spw
  this.sph = sph           
  this.img=img;
  ctx.drawImage(this.img,this.x,this.y,this.spw,this.sph); 

  };
SpriteAnime=(img,xIndex,yIndex)=>{
    this.img=img;
    this.xIndex=xIndex;
    this.yIndex=yIndex                
    ctx.drawImage(this.img,this.xIndex,this.yIndex,64,64,this.x,this.y,this.w,this.h); 

  };
  SpriteTiles=(img,xTiles,yTiles)=>{
    this.xTiles=xTiles;
    this.yTiles=yTiles;              
    this.img=img;
      ctx.drawImage(this.img,this.xTiles,this.yTiles,this.w,this.h,this.x,this.y,this.w,this.h); 
  
    };







};






/*
function draw(){
    ctx.fillStyle = c;
    ctx.fillRect(this.x, this.y, this.w,this.h);
  }
  function collide(hitX,hitY,hitW,hitH){
    this.hitX=hitX;
    this.hitY=hitY;
    this.hitW=hitW;
    this.hitH=hitH;
if(this.x<=this.hitX+this.hitW&&this.x+this.w>=this.hitX&&this.y+this.h>=this.hitY&&this.y<=this.hitY+this.hitH)
{this.collideBolean=true}else{this.collideBolean=false}}; 
*/