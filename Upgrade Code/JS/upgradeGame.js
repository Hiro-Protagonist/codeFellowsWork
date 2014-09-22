//function to create the ship
function ship(name, focus, speed, track, status) {
  this.name = name;
  this.focus = focus;
  this.speed = speed;
  this.position = 0;
  this.track = track;
  this.status = status;

  this.setStatus = function() {
    $(this.status).html(
      this.name
    );
  }
  //calculates whether they are focused by seeing if their focus level is higher than a random number
  this.isFocused = function() {
   return Math.floor(Math.random() * 10) < this.focus 
  }
  
  this.advance = function() {
    if (this.isFocused()) {

      //change the status to its name
      $(this.status).html(this.name);

      //move it forward
      this.position += this.speed;

      //animate it moving to the new position
      $(this.track).animate({
        "width": this.position + "%"}, 2000, 'linear');
    }

    else{

      //show that it's fueling
      $(this.status).html("Fueling"
      );
    }
  }

}

//names of ship
var nameList = ["Enterprise", "JFK", "HMS Nautilus", "Serenity", 
  "Titanic II", "Santa Maria", "Missouri", "HMS Victory", "Bismark", "Airzona"];

//name the ship
var shipName = function(){
  return nameList[Math.floor(Math.random() * nameList.length)];
}

//create the ships and the finish line length
var ship1 = new ship(shipName(), Math.floor(Math.random() * 10 + 3), Math.floor(Math.random() * 10 + 1), "#ship1Track", "#ship1Status");
var ship2 = new ship(shipName(), Math.floor(Math.random() * 10 + 3), Math.floor(Math.random() * 10 + 1), "#ship2Track", "#ship2Status");
var ship3 = new ship(shipName(), Math.floor(Math.random() * 10 + 3), Math.floor(Math.random() * 10 + 1), "#ship3Track", "#ship3Status");
var ship4 = new ship(shipName(), Math.floor(Math.random() * 10 + 3), Math.floor(Math.random() * 10 + 1), "#ship4Track", "#ship4Status");
var finishLine = 100;

$( window ).load(function() {
  ship1.setStatus();
  ship2.setStatus();
  ship3.setStatus();
  ship4.setStatus();
});




//while the ships haven't reached the finish line, loop moving them forward
//this is the main function in this

    $( "#startButton" ).on('click', function() {
        while (ship1.position  < finishLine && ship2.position < finishLine && ship3.position < finishLine && ship4.position < finishLine) {
        ship1.advance();
        ship2.advance();
        ship3.advance();
        ship4.advance();
        }

    });
