//Modulo de colisão para desenvolvimento de jogos
//escrito por Rodrigo Melo
import Obj from './obj.js'



var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var moveR=false,moveL=false,moveU=false,moveD=false,hit=false;
canvas.width=screen.width;
canvas.height=screen.height;
canvas.style.backgroundColor="black";

var o=[]

for(var j = 0 ; j<3 ; j++ ){

  o[j]= new Obj(400,250,64,64,0,"blue")
 
}

//let o = new Obj(400,250,128,128,0,"blue")
let i = new Obj(600,350,64,64,3,"red")



console.log(i)

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
 

  
if(moveR){i.x+=i.spd}
if(moveL){i.x-=i.spd}
if(moveU){i.y-=i.spd}
if(moveD){i.y+=i.spd}
  

  
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();

  


  i.draw()
  
  for(var j = 0 ; j<3 ; j++ ){

    o[j].draw()
    o[j].x=128*j
    o[j].collide(i.x,i.y,i.w,i.h)


    //i.collide(o[j].x,o[j].y,o[j].w,o[j].h)


  }
  ctx.font = "60px Courier New";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(`collidebollean=${o[2].collideBolean}`, canvas.width/2, canvas.height-30);


  
  
  

  ctx.restore()

};
game();
