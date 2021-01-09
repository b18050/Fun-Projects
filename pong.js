// select canvas element
const canvas = document.getElementById("pong");

// getContext of canvas = methods and properties to draw and do a lot of thing to the canvas
const ctx = canvas.getContext('2d');

const xx = canvas.width/12;
const yy = canvas.height/12;

const ox = canvas.width/2;
const oy = canvas.height/2;
// Ball object
const ball1 = {
    x : ox + xx,
    y : oy,
    radius : 10,
    velocityX : 2,
    velocityY : 0,
    speed : 7,
    color : "WHITE",
    direction : -1
}

// Ball object
const ball2 = {
    x : ox + 3*xx,
    y : oy,
    radius : 10,
    velocityX : 2,
    velocityY : 0,
    speed : 7,
    color : "WHITE",
    direction : -1
}

const ball3 = {
    x : ox - 3*xx,
    y : oy,
    radius : 10,
    velocityX : 2,
    velocityY : 0,
    speed : 7,
    color : "WHITE",
    direction : 1
}

const ball4 = {
    x : ox,
    y : oy + 2*yy,
    radius : 10,
    velocityX : 0,
    velocityY : 2,
    speed : 7,
    color : "WHITE",
    direction : 1
}

const ball5 = {
    x : ox,
    y : oy + yy,
    radius : 10,
    velocityX : 0,
    velocityY : 2,
    speed : 7,
    color : "WHITE",
    direction : 1
}

const ball6 = {
    x : ox,
    y : oy + 3*yy,
    radius : 10,
    velocityX : 0,
    velocityY : 2,
    speed : 7,
    color : "WHITE",
    direction : -1
}



// collision detection
function collision(b1,b2){
        return Math.abs(b1.x - b2.x) <= 20 && Math.abs(b1.y - b2.y) <= 20;
}


// draw a rectangle, will be used to draw paddles
function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

// draw circle, will be used to draw the ball
function drawArc(x, y, r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}



// update function, the function that does all calculations
function update(){
    
   
    // the ball has a velocity
    ball1.x += ball1.direction * ball1.velocityX;
    ball1.y += ball1.direction * ball1.velocityY;

    // the ball has a velocity
    ball3.x += ball3.direction * ball3.velocityX;
    ball3.y += ball3.direction * ball3.velocityY;
    
    // the ball has a velocity
    ball2.x += ball2.direction * ball2.velocityX;
    ball2.y += ball2.direction * ball2.velocityY;

    ball4.x += ball4.direction * ball4.velocityX;
    ball4.y += ball4.direction * ball4.velocityY;

    ball5.x += ball5.direction * ball5.velocityX;
    ball5.y += ball5.direction * ball5.velocityY;

    ball6.x += ball6.direction * ball6.velocityX;
    ball6.y += ball6.direction * ball6.velocityY;
    
    //Ball1 = 2,3,4,5,6 = > 5 collisions.
    if(collision(ball1,ball2)){
        ball1.direction = 0 - ball1.direction;
        ball2.direction = 0 - ball2.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball1,ball3)){
        ball3.direction = 0 - ball3.direction;
        ball1.direction = 0 - ball1.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball1,ball4)){
        ball1.direction = 0 - ball1.direction;
        ball4.direction = 0 - ball4.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball1,ball5)){
        ball1.direction = 0 - ball1.direction;
        ball5.direction = 0 - ball5.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball1,ball6)){
        ball1.direction = 0 - ball1.direction;
        ball6.direction = 0 - ball6.direction;
        score = score + 1;
        console.log(score);
    }

    //Ball2 -> 3,4,5,6 => 4 colllisions
    if(collision(ball2,ball3)){
        ball2.direction = 0 - ball2.direction;
        ball3.direction = 0 - ball3.direction;
        score = score + 1;
        console.log(score);
    }
    
    if(collision(ball2,ball4)){
        ball2.direction = 0 - ball2.direction;
        ball4.direction = 0 - ball4.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball2,ball5)){
        ball2.direction = 0 - ball2.direction;
        ball5.direction = 0 - ball5.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball2,ball6)){
        ball2.direction = 0 - ball2.direction;
        ball6.direction = 0 - ball6.direction;
        score = score + 1;
        console.log(score);
    }

    //Ball3 -> 4,5,6 => 3 collisions
    if(collision(ball3,ball4)){
        ball3.direction = 0 - ball3.direction;
        ball4.direction = 0 - ball4.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball3,ball5)){
        ball3.direction = 0 - ball3.direction;
        ball5.direction = 0 - ball5.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball3,ball4)){
        ball3.direction = 0 - ball3.direction;
        ball6.direction = 0 - ball6.direction;
        score = score + 1;
        console.log(score);
    }

    //Ball4 -> 5,6 => 2 collisions
    if(collision(ball4,ball5)){
        ball4.direction = 0 - ball4.direction;
        ball5.direction = 0 - ball5.direction;
        score = score + 1;
        console.log(score);
    }

    if(collision(ball4,ball6)){
        ball4.direction = 0 - ball4.direction;
        ball6.direction = 0 - ball6.direction;
        score = score + 1;
        console.log(score);
    }

    //Ball5 -> 6 => 1 collision
    if(collision(ball5,ball6)){
        ball5.direction = 0 - ball5.direction;
        ball6.direction = 0 - ball6.direction;
        score = score + 1;
        console.log(score);
    }
    
}

var score = 0;
// render function, the function that does al the drawing
function render(){

   
    // clear the canvas
    drawRect(0, 0, canvas.width, canvas.height, "#000");
    
    // draw the ball
    drawArc(ball1.x, ball1.y, ball1.radius, ball1.color);
    // draw the ball
    drawArc(ball3.x, ball3.y, ball3.radius, ball3.color);
    // draw the ball
    drawArc(ball2.x, ball2.y, ball2.radius, ball2.color);

    // draw the ball
    drawArc(ball4.x, ball4.y, ball4.radius, ball4.color);

    // draw the ball
    drawArc(ball5.x, ball5.y, ball5.radius, ball5.color);

    // draw the ball
    drawArc(ball6.x, ball6.y, ball6.radius, ball6.color);
}
function game(){
    update();
    render();
}
// number of frames per second
let framePerSecond = 50;

//call the game function 50 times every 1 Sec
let loop = setInterval(game,1000/framePerSecond);

