  
 
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
