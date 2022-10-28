let basket = document.getElementById("basket");
let overlay_Container = document.querySelector(".overlaycontainer");
let myclose = document.getElementById("play");
let restart = document.getElementById("gameOver");
let egg1= document.getElementById("egg-img");
let egg2 =document.getElementById("egg-img1");
let egg3 = document.getElementById("egg-img2")
let broken_egg = document.getElementById("broken");
let broken_egg1 = document.getElementById("broken_1");
let broken_egg2 = document.getElementById("broken_2");
let life_spane =document.getElementById("life")
let score_spane =document.getElementById("score")
let score_onWindow = document.getElementById("score_2")
let bascker_score = document.getElementById("score_1")

let life = 15;
let score = 0;
let pos = 100;
let screen_Height = screen.height - 250; 
document.addEventListener("mousemove", function(e)
{
    basket.style.left = e.clientX ;
})



function playcode(){
    overlay_Container.style.display="block";
    myclose.onclick = function()
{
    overlay_Container.style.display = "none";
    
    function game(){
        let audio = new Audio('audio/happy chicken.mp3');
    audio.play();
    the_game = function() {
      
        egg_down(egg1);
         anim_id = requestAnimationFrame(the_game);
         cancelAnimationFrame(anim_id)
     }
     
     anim_id = requestAnimationFrame(the_game);
    
    function egg_down(egg){
        egg_current_position = parseInt(egg.style.top = pos);
        if(pos >= screen_Height){  
            broken_egg.style.display='block';   
          collision()
            pos=100;
            setTimeout(function(){
                broken_egg.style.display ='none';
            },800);
        }
    
        pos+=1;
        requestAnimationFrame(the_game);
      
    }
//egg2

    the_game1 = function() {
      
        egg_down1(egg2);
         anim_id1 = requestAnimationFrame(the_game1);
         cancelAnimationFrame(anim_id1)
     }
     
     anim_id = requestAnimationFrame(the_game1);
    
    function egg_down1(egg){
        egg_current_position = parseInt(egg.style.top = pos);
        if(pos >= screen_Height){     
          collision()
          broken_egg1.style.display='block';
            pos=100;
            setTimeout(function(){
                broken_egg1.style.display ='none';
            },800);
        }
    
        pos+=1;
        requestAnimationFrame(the_game1);
      
    }
    anim_id = requestAnimationFrame(the_game1);
    
    
   // egg3

   the_game2 = function() {
      
    egg_down2(egg3);
     anim_id2 = requestAnimationFrame(the_game2);
     cancelAnimationFrame(anim_id2)
 }
 
 anim_id = requestAnimationFrame(the_game2);

function egg_down2(egg){
    egg_current_position = parseInt(egg.style.top = pos);
    if(pos >= screen_Height){     
      collision()
      broken_egg2.style.display='block';
        pos=100;
        setTimeout(function(){
            broken_egg2.style.display ='none';
        },800);
    }

    pos+=1;
    requestAnimationFrame(the_game2);
  
}
anim_id = requestAnimationFrame(the_game2);

   
    
    
    function collision()
    {
        
    let rectbasket = basket.getBoundingClientRect()
    let leftofBasket =rectbasket.left;
    let rightofBasket =rectbasket.right;
    let topofBasket =rectbasket.top;
    let bottomofBasket = rectbasket.bottom;
    
    let rectegg = egg1.getBoundingClientRect()
    let leftofegg= rectegg.left;
    let rightegg=rectegg.right;
    let topegg=rectegg.top;
    let bottomegg=rectegg.bottom;

    let rectegg2 = egg2.getBoundingClientRect()
    let leftofegg2= rectegg2.left;
    let rightegg2=rectegg2.right;
    let topegg2=rectegg2.top;
    let bottomegg2=rectegg2.bottom;

    let rectegg3 = egg3.getBoundingClientRect()
    let leftofegg3= rectegg3.left;
    let rightegg3=rectegg3.right;
    let topegg3=rectegg3.top;
    let bottomegg3=rectegg3.bottom;

    if(bottomegg < bottomofBasket &&  bottomegg > topofBasket && leftofegg >= leftofBasket &&  rightegg <= rightofBasket )
        {
      increase_score()
        } 
       else 
        {
            decriment_life();
            
        }

        if(bottomegg2 < bottomofBasket &&  bottomegg2 > topofBasket && leftofegg2 >= leftofBasket &&  rightegg2 <= rightofBasket )
        {
      increase_score()
        } 
       else 
        {
            decriment_life();
           
        }

        if(bottomegg3 < bottomofBasket &&  bottomegg3 > topofBasket && leftofegg3 >= leftofBasket &&  rightegg3 <= rightofBasket )
        {
      increase_score()
        } 
       else 
        {
            decriment_life();
          
        }
        
    }
    
   
   /* function hide(){
    setTimeout(function(){
        broken_egg.style.display ='none';
    },800);
    }
    */
  
}
game();
    function decriment_life(){
        life--;
        life_spane.innerHTML=life;
        if (life === 0){
            let lose = new Audio('audio/game over.mp3');
            lose.play();
            restart.style.display ='block';
        }
    }
    
    function increase_score()
    {
        score++;
        let win = new Audio('audio/score.mp3');
       win.play();
        score_spane.innerHTML=score;
        bascker_score.innerHTML=score;
        score_onWindow.innerHTML = score;
    }
    
    

    
    
    
    
    
    
    
    
}



}
 

