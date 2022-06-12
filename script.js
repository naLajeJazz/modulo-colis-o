var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var info= document.getElementById("info")
var hit=false
var moveR=false,moveL=false,moveU=false,moveD=false;
let ccColor="black" 
canvas.width=200;
canvas.Height=200;
canvas.style.backgroundColor=ccColor


function Obj(x,y,w,h,c){
  this.x=x
  this.y=y
  this.w=w
  this.h=h
  this.c=c
  this.collideBolean=false
  this.draw=function(){
    
ctx.fillStyle = c;
ctx.fillRect(this.x, this.y, this.w,this.h);
  }

this.collide=function(hitX,hitY,hitW,hitH){
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

let o = new Obj(49,50,32,32,"blue")

let i = new Obj(150,50,32,32,"red")



function game (){
  requestAnimationFrame(game,canvas);


  /*if( i.x <= o.x+32 && i.x+32 >= o.x && i.y+32 >= o.y && i.y<=o.y+32 ){
    
  hit=true;
    
  
  }else{hit=false}*/
  
i.collide(o.x,o.y,o.w,o.h)


  
if(moveR){i.x+=1}
if(moveL){i.x-=1}
if(moveU){i.y-=1}
if(moveD){i.y+=1}
  

  
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  
  o.draw()
  i.draw()
  ctx.beginPath();
  ctx.strokeStyle = "white";
  




  

  ctx.restore()
info.innerHTML=`
i.x= ${i.x} o.x+32= ${o.x+32}
<br>
i.x+32= ${i.x+32} o.x= ${o.x}
<br>

collidebollean=${i.collideBolean}

`
}game()

