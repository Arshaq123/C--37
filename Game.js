//this class will control the game - start , play
class Game {

    constructor(){

    }

    //read the gameState value from database
    getGameState(){
      
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", (data)=>{
         //this is defined in sketch.js
          gameState = data.val();

      });
    }

    //write database value 
    updateGameState(state){

       database.ref('/').update({
        //this is in database
        gameState : state //as per the form , update the value of gameState in database

      });
    }




    async Start(){

      if(gameState === 0){

        player = new Player();    

        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){

          playerCount = playerCountRef.val();
          player.getPlayerCount();
        }


        form = new Form();
        form.display();
      }

    }

    play(){
      
      //hide all form elements      
      form.hide();

      text("Game Start", 120,100);;

      //we need all the 4 players details      
      Player.getAllPlayersInfo();
                                    //0     1   2   3
      if( allPlayers !== undefined ){ // [P1, P2, P3, P4]

        var dispPos = 130;

        for( var plr in allPlayers){

          if( plr === "player " + player.index)
          {
              fill("red");
          }
          else
            fill("black");
          
        }

        dispPos += 20;

        text(allPlayers[plr].name + ","+ allPlayers[plr].distance , 120,dispPos)


      }
      //if up arrow is pressed, player moves up
        if(keyIsDown(UP_ARROW) && player.index !== null) {

          player.distance += 50;
          player.updatePlayerDetails();//to update the distance

          
        }

    }



    
}