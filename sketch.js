let spaceship;
let backgrounder;
let enemy;
let bullets = [];

function preload(){
  enemy = loadImage("https://image.ibb.co/bGtsGy/Space_Invaders_PNG_Pic.png")
  backgrounder= loadImage("https://image.ibb.co/c2GLKJ/imageedit_1_2211904142.png")
  spaceship= loadImage("https://image.ibb.co/hbnhYd/2e3c42af342d83e.png");
}
function setup() {
    createCanvas(800,600);
    background(backgrounder);
};
let xcoordinate= 300;

function drawGame(){
  for(let i=0; i<bullets.length; i++){
      let x = bullets[i][0];
      let y = bullets[i][1];
      rect(x, y, 10, 20);
  }
}

function nextStep(){
  for(let i=0; i<bullets.length; i++){
      bullets[i][1] = bullets[i][1] - 5;
  }
}
let isAlive = true

function collision(){
  for (i=0; i<bullets.length; i++){
   if(dist(enemyX+ enemy.width/10,enemyY+ enemy.height/10 ,bullets[i][0] + 5 , bullets[i][1] + 10)
  <= 10+enemy.height/10){
     isAlive = false;
     score = score + 100
  }  }
}

let enemyX = 400
let subtracter = 8
let enemyY = 50
let enemycord = [enemyX, enemyY]
let firerate = 60
score = 0
let isgone = false

function draw(){
 
 firerate-- 
 if (firerate == 0) {firerate = 60}
  background(backgrounder);
  textSize(20)
  text("Player One", 650, 50)
  text("Score: "+ score, 50, 50);
  fill(255,255,255);
  noStroke()
  collision()
  if (isAlive) {
  image(enemy, enemyX, enemyY, enemy.width/5,enemy.height/5)
}
 else { isgone = true; 
}
  if (enemyX === 0 || enemyX === 600){ enemyY = enemyY+20 
    subtracter = -subtracter} 
  enemyX = enemyX + subtracter
  image(spaceship, xcoordinate, 475, spaceship.width/1.8, spaceship.height/1.8)
  drawGame(); 
  nextStep(); 
  console.log(firerate)
  console.log(isAlive, isgone)
  endgame()
  
};

function endgame() {
  if (isgone){ clear() 
  background(backgrounder)
  textSize(25);
text("CONGRATULATIONS", 266,250)
text("YOU HAVE DEFEATED THE INVADER!", 170,300)
}

if (enemyY > 400) {clear()
background(backgrounder)
textSize(25);
text("YOU LOST", 330,250)
text("YOU HAVE FAILED HUMANITY", 220,300)
}
}

function keyPressed() {
  if (keyIsDown(LEFT_ARROW) && xcoordinate>0) {
    xcoordinate= xcoordinate-15;    
  } else if (keyIsDown(RIGHT_ARROW) && xcoordinate<600) {
    xcoordinate= xcoordinate+15;
  }
  if (keyCode === 32){
    const bullety = [xcoordinate + 79, 475];
    if (firerate < 30) { 
      bullets.push(bullety)
      } ;
}
}

