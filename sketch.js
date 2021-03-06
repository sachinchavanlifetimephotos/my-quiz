var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  } 

  for(var plr in allContestants){ 
    var correctAns ="2"; 
    if(correctAns === allContestants[plr].answer) 
    fill("Green") 
    else{ 
      fill("red"); 
    }
  
  }
  
  
  if(allContestants !== undefined){ 
    fill ("Blue"); 
    textSize(20); 
    text("*NOTE: CONTESTANT WHO ANSWERED CORRECT ARE HIGHLIGHTED IN GREEN COLOR",130,230); 
  
  }
} 


