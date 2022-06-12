//Modulo de colisão para desenvolvimento de jogos
//escrito por Rodrigo Melo

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var moveR=false,moveL=false,moveU=false,moveD=false, spd=3,hit=false;
canvas.width=screen.width;
canvas.height=screen.height;
canvas.style.backgroundColor="black";

let o = new Obj(400,250,128,128,"blue")
let i = new Obj(600,350,128,128,"red")


function Obj(x,y,w,h,c){
  this.x=x
  this.y=y
  this.w=w
  this.h=h
  this.c=c
  this.collideBolean=false
  this.draw=()=>{
    ctx.fillStyle = c;
    ctx.fillRect(this.x, this.y, this.w,this.h);
  }

  this.collide=(hitX,hitY,hitW,hitH)=>{
        this.hitX=hitX;
        this.hitY=hitY;
        this.hitW=hitW;
        this.hitH=hitH;
  if(this.x<=this.hitX+this.hitW&&this.x+this.w>=this.hitX&&this.y+this.h>=this.hitY&&this.y<=this.hitY+this.hitH)
  {this.collideBolean=true}else{this.collideBolean=false}}; 
  
};

window.addEventListener("keyup",()=>{
    moveL=false;
    moveR=false;
    moveU=false;
    moveD=false;
},false);

window.addEventListener("keydown",function(event){

        let k= event.key;
    
        if (k == "d" ){
            moveR=true;
                
        }else if(k =="a" ){
            moveL=true;
            
        }else if (k=="w"){
          moveU=true;
        }else if (k=="s"){
          moveD=true;
        }
            
    },false);

function game (){
requestAnimationFrame(game,canvas);
//algoritmo de colisão
 /*if( i.x <= o.x+32 && i.x+32 >= o.x && i.y+32 >= o.y && i.y<=o.y+32 ){
    hit=true;}else{hit=false}*/
  
 //usando somente o atributo de colisão da classe   
i.collide(o.x,o.y,o.w,o.h)


  
if(moveR){i.x+=spd}
if(moveL){i.x-=spd}
if(moveU){i.y-=spd}
if(moveD){i.y+=spd}
  

  
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  
  o.draw()
  i.draw()
 
  ctx.font = "60px Courier New";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(`collidebollean=${i.collideBolean}`, canvas.width/2, canvas.height-30);

  ctx.restore()

};
game();

