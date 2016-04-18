
// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png',
    this.speed = Math.ceil(Math.random()*250);
    this.x = x;
    this.y = y;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 505){
        this.x = -100;
    };
  };
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Hero = function() {
  this.sprite = 'images/char-cat-girl.png',
  this.speed = 100;
  this.x = 200;
  this.y =400;
  this.hitDetect = function (){
    for (i=0;i<allEnemies.length; i++){
      var hitBox = 25 // number
      if (this.y <= allEnemies[i].y + hitBox && this.x <= allEnemies[i].x + hitBox && allEnemies[i].y<= this.y + hitBox && allEnemies[i].x <= this.x +hitBox){
           this.x = 200;
           this.y = 400;
           Enemy.speed = Math.ceil(Math.random()*250);
           reset();
         };
    }
  };
};

Hero.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.y > 400){
      this.y = 400;
      this.x = 200;
    };
    if (this.y < -30){
      this.y = 400;
      this.x = 200;
    };
    if (this.x > 400) {
      this.x -= 100;
    };
    if (this.x < 0){
      this.x += 100;
    };
    player.hitDetect();
    levelUp();
};

Hero.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Hero.prototype.handleInput = function(key){
  if (key === 'up'){
      this.y -= 83;
      console.log(this.y);
  };
  if (key === 'down') {
      this.y += 83;
  };
  if (key === 'left'){
      this.x -= 100;
  };
  if (key === 'right'){
      this.x += 100;
  };
};

var Rocks = function(){
  this.sprite = 'images/Rock.png';
  this.speed = 150;
  this.x = 0;
  this.y = -15;
};

Rocks.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
Rocks.prototype.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
    this.x += this.speed * dt;

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var player = new Hero();
var rock1 = new Rocks();
var numBeetles = 3;

var beetleCreator = function(numBeetles) {
  var beetleYpos = 65;
  var beetleXstart = 0;
  for (var i = 0; i < numBeetles; i++){
    allEnemies[i] = new Enemy(beetleXstart, beetleYpos);
    beetleYpos += 83;
    if (beetleYpos > 231){
      beetleYpos = 65;
    };
    beetleXstart += Math.floor(Math.random() * 120);
  };
};
beetleCreator(numBeetles);


var reset = function(){
      player.y = 400;
      player.x = 200;

};

var levelUp = function(dt){
  for (beetle in allEnemies){
    if (player.y <= -15){
      var level = 5
      allEnemies[beetle].speed += level;
      setTimeout(reset, 1000);
      level+= 5;
      swal({   title: "LEVEL UP!",   text: "We're currently over caffeinating the bugs. You ready for the next level?", confirmButtonText: "I was born ready.", imageURL: "/images/Star.png" });
    };
  };
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
