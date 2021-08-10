class Form{


constructor(){

    this.title = createElement('h1');
    this.input = createInput('Enter Your Name');
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    
}


hide(){
    
    this.input.hide();

    //hide remaining elements

    this.button.hide();

    this.greeting.hide();
    

}

//html DOM objects - Document object Model

//input box - to enter name
//button - to click start/play
//title - our game name
//text - greet player
display(){

    //this is to give title to the game
   // camel casing
    this.title.html("Car Racing Game");
    this.title.position(450, 100);


    //create an input box to enter name
   
    this.input.position(450, 300);

    //create button to allow player to press START    
   
    this.button.position(450, 360);

    //once user clicks play, register the player
    //mousePressed

    this.button.mousePressed(()=>{

        this.input.hide();
        this.button.hide();

        //name of the player
        playerCount += 1;
         
        player.index = playerCount;
        // we need to store this information in the database 
        player.name = this.input.value();

        player.updatePlayerCount(playerCount);
        player.updatePlayerDetails();

        this.greeting.html("Hello " + player.name);
        this.greeting.position(450, 360);


    });  




}

}