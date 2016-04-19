
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
var hitBox = 25
var Hero = function() {
  this.sprite = 'images/char-cat-girl.png',
  this.speed = 100;
  this.x = 200;
  this.y =400;
  this.hitDetect = function (){
    for (i=0;i<allEnemies.length; i++){
      if (this.y <= allEnemies[i].y + hitBox && this.x <= allEnemies[i].x + hitBox && allEnemies[i].y<= this.y + hitBox && allEnemies[i].x <= this.x +hitBox){
           reset();
           Enemy.speed = Math.ceil(Math.random()*250);
         };
    }
  };
};

var Rock = function(){
  this.sprite = 'images/Rock.png';
  this.speed = 150;
  this.x = 200;
  this.y = -15;
};

Rock.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
Rock.prototype.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
    this.x += this.speed * dt;
    if (this.x > 505){
        this.x = -100;
    };
    if (player.y <= this.y + hitBox && player.x <= this.x + hitBox && this.y <= player.y + hitBox && this.x <= player.x + hitBox){
      this.x = player.x;
      this.y = player.y;
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


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var player = new Hero();
var rock1 = new Rock();

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
beetleCreator(3);

var reset = function(){
      player.y = 400;
      player.x = 200;
};

var levelUp = function(dt){
  if (player.y <= rock1.y + hitBox && player.x <= rock1.x + hitBox && rock1.y <= player.y + hitBox && rock1.x <= player.x + hitBox){
    for (beetle in allEnemies){
        var level = 5
        allEnemies[beetle].speed += level;
        setTimeout(reset, 1000);
        setTimeout(rock1.update, 1000);
        level+= 5;
        swal({   title: "LEVEL UP!",   text: "The bugs are currently over caffeinating. You ready for the next level?", confirmButtonText: "I was born ready.", imageURL: "/images/Star.png" });
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
