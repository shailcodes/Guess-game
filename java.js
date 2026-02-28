const inputNum = document.querySelector(".inputbox input");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const message = document.querySelector(".message");
const attempts = document.querySelector(".attempt");
const winSound = new Audio("sound.mp3");
const bgMusic = new Audio("music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;



let compChoice = Math.floor(Math.random() *10) +1;
console.log(compChoice);


let maxAttempt = 5;
let attempt = 0;
 
    button1.addEventListener ("click" , () =>{
        console.log("hi");
     
 


        let userChoice = Number(inputNum.value);
        
    

         if (inputNum.value !== "") {
               if(bgMusic.paused){
   bgMusic.play()


    }

            attempt++;
             attempts.innerText = attempt;
             if (userChoice === compChoice){
          
             message.innerText = "correct";
             button1.disabled = true;
             winSound.play();
             launchConfetti();

        }
           else if (attempt === maxAttempt){
               
                
                button1.disabled = true;
                message.innerText = "💀 Game Over! Number was " + compChoice;
                
            
            }
            
            else if  (userChoice > compChoice ) {
            message.innerText = "Too High 📈";
            

        }
            else if (userChoice < compChoice) {
              message.innerText = "Too Low 📉";
        }
    

             if (attempt === 4){
                 attempts.innerText = " ⚠ Last chance!";
            }

        }

    

    });


        




    
     

button2.addEventListener ("click" , () =>{
        
        inputNum.value = "";
        message.innerText = "Start New Game🔢!";
        button1.disabled = false;
        compChoice = Math.floor(Math.random() *10) +1;
        attempts.innerText = "";
        attempt = 0 ;


});




function launchConfetti(){
   const container = document.querySelector("#confetti-container");

   for(let i=0;i<80;i++){
      const piece = document.createElement("div");
      piece.classList.add("confetti");

      piece.style.left = Math.random()*100 + "vw";
      piece.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
      piece.style.animationDuration = (Math.random()*2+1)+"s";

      container.appendChild(piece);

      setTimeout(()=>piece.remove(),3000);
   }

}


