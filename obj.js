 
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
  draw(c){
    ctx.save()
    this.c=c
    ctx.fillStyle =c;
    ctx.fillRect(this.x, this.y, this.w,this.h);
    ctx.restore()
  };

   collide(hitX,hitY,hitW,hitH){
    this.collideBolean = false;
    this.hitX=hitX;
    this.hitY=hitY;
    this.hitW=hitW;
    this.hitH=hitH;
if(this.x<=this.hitX+this.hitW&&this.x+this.w>=this.hitX&&this.y+this.h>=this.hitY&&this.y<=this.hitY+this.hitH)
{this.collideBolean=true}else{this.collideBolean=false}

}; 

hudMsg(msgX,msgY,msg){
this.msgX=msgX;
this.msgY=msgY;
ctx.save()
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText(msg, this.msgX, this.msgY);
ctx.restore()
}

Sprite=(img)=>{
                    
  this.img=img;
    ctx.drawImage(this.img,0,0,32,32,this.x,this.y,this.w,this.h); 

  };
SpriteAnime=(img,xIndex,yIndex)=>{
    this.xIndex=xIndex;
    this.yIndex=yIndex                
  this.img=img;
    ctx.drawImage(this.img,this.xIndex,this.yIndex,64,64,this.x,this.y,this.w,this.h); 

  };
  SpriteTiles=(img)=>{
                    
    this.img=img;
      ctx.drawImage(this.img,960,1920,this.w,this.h,this.x,this.y,this.w,this.h); 
  
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