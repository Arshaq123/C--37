//this class will maintain the player details
class Player {

    constructor(){
    //player - name, distance, index

    this.name = null;
    this.distance = 0;
    this.index = null;

    }

    //we need to store playerCount in database - write into
    updatePlayerCount(count){
    
            database.ref('/').update({
            //this is in database
            playerCount : count //as per the form , update the value of playerCount in database

        })
            

    }


    //we need to read playerCount from database - read from/get

    getPlayerCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=>{
           //this is defined in sketch.js
            playerCount = data.val();
        });

    }


    //keep a record of player details like name, distance rank etc.
    updatePlayerDetails(){
        var playerIndex = "players/player" + playerCount; //player1
       database.ref(playerIndex).set({

            name : this.name,            
            distance: this.distance

       }) ;
    }


    static getAllPlayersInfo(){

      var  allPlayerInfoRef= database.ref('players');
      allPlayerInfoRef.on("value",(data)=>{

        allPlayers = data.val();

      });

        
    }
    
}