// // Computer random number generate karega (1–100)

// // User guess karega

// // Output milega:

// // Too high

// // Too low

// // Correct 🎉


const inputNum = document.querySelector(".inputbox input");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const message = document.querySelector(".message");
const mess = document.querySelector(".msg p1");
const attempts = document.querySelector(".attempt");
const winSound = new Audio("sound.mp3");
const bgMusic = new Audio("music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;



let compChoice = Math.floor(Math.random() *100) +1;
console.log(compChoice);

let count = 0;

let maxAttempt = 5;
let attempt = 0;
 
    button1.addEventListener ("click" , () =>{
        console.log("hi");
     
    if(bgMusic.paused){
   bgMusic.play()





        let userChoice = Number(inputNum.value);
        console.log(userChoice);
        
        count++;
        mess.innerText = count;

        

        
       

         if (inputNum.value !== "") {
            attempt++;
             attempts.innerText = attempt;
             if (userChoice === compChoice){
          
             message.innerText = "correct";
             button1.disabled = true;

        }
           else if (attempt === maxAttempt){
               
                attempts.innerText = "Game over";
                button1.disabled = true;
                winSound.play();
                launchConfetti();
            
            }

             if (attempt === 4){
                 attempts.innerText = "last chance: hint first n: 2";
            }

        }

    


      


        
        else if  (userChoice > compChoice ) {
            message.innerText = "Too high";
            attempts.innerText=attempt++

        }
        else if (userChoice < compChoice) {
              message.innerText = "Too low";
        }
    }

        });


        




    
     

button2.addEventListener ("click" , () =>{
        
        inputNum.value = "";
        message.innerText = "enter new no!";
        button1.disabled = false;
        compChoice = Math.floor(Math.random() *100) +1;


     


const inputNum = document.querySelector(".inputbox input");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const message = document.querySelector(".message");
const mess = document.querySelector(".msg p1");
const attempts = document.querySelector(".attempt");







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

