var  database;

var form ;
var game;
var player;

var playerCount=0;
var gameState = 0;

var allPlayers;//this is an array to store all players information

function setup(){

  database = firebase.database();
  //console.log(database);
  createCanvas(500,500);

  game = new Game(); 
  game.getGameState();
  game.Start();

}

function draw(){

  background("white");
  
    //text(mouseX + "," + mouseY,300,300)
    
  if(playerCount === 4){

   game.updateGameState(1);

  }
    
  if (gameState === 1){
    clear();
    game.play();
  }
}

//creating a 4 player car racing game
//if no players are registered yet - gameState is 0 
//if 4 players are there - gameState is 1