  
 

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
  
 
 export default class Obj {
  constructor(x, y, w, h, spd, c) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c
    this.spd = spd
    this.collideBolean = false


  }
  draw(){
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w,this.h);
  }

   collide(hitX,hitY,hitW,hitH){
    this.hitX=hitX;
    this.hitY=hitY;
    this.hitW=hitW;
    this.hitH=hitH;
if(this.x<=this.hitX+this.hitW&&this.x+this.w>=this.hitX&&this.y+this.h>=this.hitY&&this.y<=this.hitY+this.hitH)
{this.collideBolean=true}else{this.collideBolean=false}}; 

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
