
// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png',
    this.speed = 256;
    this.x = 0;
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
};

Hero.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

Hero.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Hero.prototype.handleInput = function(){
  // if (this.y > 400 || this.y < -50){
  //   this.y = 400;
  // };
  // if (this.x > 400 || this.x < 0){
  //   this.x = 200;
  // };
  // if (this.y < 400 && this.y > -50){
  //   for (38 in 'allowedKeys'){
  //     this.y = this.y - 83;
  //   };
  //   for (40 in 'allowedKeys'){
  //     this.y = this.y + 83;
  //   }
  // }
  // if (this.x < 400 && this.x > 0){
  //   for (37 in 'allowedKeys'){
  //     this.x = this.x - 101;
  //   };
  //   for (39 in 'allowedKeys'){
  //     this.x = this.x + 101;
  //   };
  // }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var player = new Hero();
var beetle1 = new Enemy(65);
var beetle2 = new Enemy(145);
var beetle3 = new Enemy(225);

allEnemies.push(beetle1, beetle2, beetle3);



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
