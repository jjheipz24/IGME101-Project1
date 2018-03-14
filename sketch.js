/*
Jin Jin Heipler 
9/18/17
IGME-101: Project 1
*/

var myTurtle; //declare a variable for our Turtle

function setup() {
    createCanvas(800, 800);
    //background("#08224c");
    background("white");


    //always call turtleSetup() here
    turtleSetup();

    //make a Turtle object
    myT = new Turtle(0, 0);
    myT.backgroundClr(0, 0, 0);
    myT.starSky(25); // makes night sky w stars
    myT.spaceDust(8, 45, 30);

    noStroke();
    fill(209, 42, 12);
    triangle(400, 405, 455, 375, 400, 345);
    stroke("black");
    strokeWeight(2);
    fill(163, 160, 159);
    rect(250, 345, 150, 60);
    fill(12, 166, 255);
    rect(205, 355, 45, 40);
    fill(209, 42, 12);
    beginShape();
    vertex(280.53, 348.80);
    vertex(252.27, 313.60);
    vertex(190.93, 320.53);
    vertex(209.07, 328.53);
    vertex(247.47, 325.87);
    vertex(264.53, 348.80);
    endShape(CLOSE);
    beginShape();
    vertex(284.80, 406.40);
    vertex(252.27, 438.40);
    vertex(205.87, 425.60);
    vertex(221.87, 418.13);
    vertex(249.60, 426.67);
    vertex(267.20, 406.40);
    endShape(CLOSE);
    strokeWeight(4);
    fill(201, 216, 224);
    ellipse(343, 370, 30, 30);
    myT.trail(5); //makes spaceship
    
    

    myT.setAngle(0);
    myT.move(200, 600);
    myT.redBlob(300, 45, 8);
    myT.blueBlob(200, 45, 90); // planet

    myT.move(700, 100);
    myT.greenBlob(150, 45, 8);
    myT.blueBlob(100, 89, 10); // planet

    myT.move(400, 20);
    myT.blueBlob(100, 42, 8);
    myT.greenBlob(50, 90, 8); //planet

    myT.move(750, 450);
    myT.blueBlob(270, 45, 8);
    myT.redBlob(175, 45, 8); //planet

    myT.move(50, 100);
    myT.setPenColor("white");
    myT.setWeight(2);
    myT.setAngle(270);
    myT.swirl(3);
    myT.redBlob(100, 45, 90); //meteor

    myT.setPenColor(238, 242, 157);
    myT.move(750, 750);
    myT.moon(300);
    noStroke();
    fill(6, 62, 213);
    ellipse(697, 723, 78, 78); //moon









} //end setup

function draw() {
    //leave this empty for now
}




function turtleSetup() {
    Turtle.prototype.move = move;
    Turtle.prototype.poly = poly;
    Turtle.prototype.circle = circle;
    Turtle.prototype.spiral = spiral;
    Turtle.prototype.circleLoop = circleLoop;
    Turtle.prototype.redBlob = redBlob; // makes a red blob
    Turtle.prototype.blueBlob = blueBlob; // makes a blue blob
    Turtle.prototype.greenBlob = greenBlob; // makes a green blob
    Turtle.prototype.backgroundClr = backgroundClr; // background color
    Turtle.prototype.star = star; // makes a star
    Turtle.prototype.starSky = starSky; //makes a bunch of stars in random places
    Turtle.prototype.swirl = swirl; // makes the trail behind meteor
    Turtle.prototype.moon = moon; // makes the moon
    Turtle.prototype.spaceDust = spaceDust;
    Turtle.prototype.trail = trail; // makes a trail behind spaceship


}

function move(x, y) { // move turtle
    this.penUp();
    this.moveTo(x, y);
    this.penDown();
}

function poly(num, leng) {
    for (var i = 0; i < num; i++) {
        this.forward(leng);
        this.left(360 / num);
    }
}

function circle(circumference) {
    for (var i = 0; i < 360; i++) {
        this.forward(circumference / 360);
        this.right(1);
    }

}

function spiral(ang, reps) {
    var leng = 1
    //this.setAngle(ang);
    this.setAngle(305);
    for (var i = 1; i < reps; i++) {
        this.forward(leng);
        this.left(ang);
        leng++;
    }
}

function circleLoop(circumference, ang, reps) {
    for (var i = 0; i < reps; i++) {
        this.circle(circumference);
        this.left(ang);
    }

}

function redBlob(bigC, ang, reps) {
    var w = 3;
    var g = 0;
    var b = 0;
    for (var i = 0; i < 3; i++) {
        this.setWeight(w);
        this.setPenColor(255, g, b);
        this.circleLoop(bigC, ang, reps);
        w--;
        bigC = bigC - 50;
        g = g + 65;
        b = b + 65;

    }
}

function blueBlob(bigC, ang, reps) {
    var w = 3;
    var r = 23;
    var g = 198;
    for (var i = 0; i < 3; i++) {
        this.setWeight(w);
        this.setPenColor(r, g, 237);
        this.circleLoop(bigC, ang, reps);
        w--;
        bigC = bigC - 50;
        g = g + 65;
        r = r + 65;

    }
}

function greenBlob(bigC, ang, reps) {
    var w = 3;
    var r = 0;
    var b = 0;
    for (var i = 0; i < 3; i++) {
        this.setWeight(w);
        this.setPenColor(r, 255, b);
        this.circleLoop(bigC, ang, reps);
        w--;
        bigC = bigC - 50;
        b = b + 65;
        r = r + 65;

    }
}

function backgroundClr(r, g, b) {
    for (var i = 0; i < height; i++) {
        this.setPenColor(r, g, b);
        this.forward(width);
        this.right(90);
        this.forward(1);
        this.right(90);
        r = r + .017;
        g = g + .17;
        b = b + .58;
        this.setPenColor(r, g, b);
        this.forward(width);
        this.left(90);
        this.forward(1);
        this.left(90);

    }
}

function star(leng) {
    this.setAngle(random(360));
    this.setPenColor(100);
    this.addPoint(this.x, this.y);
    for (var i = 0; i < 5; i++) {
        this.forward(leng);
        this.addPoint(this.x, this.y);
        this.left(72);
        this.forward(leng);
        this.addPoint(this.x, this.y);
        this.right(144);
    }
    this.endTurtleShape(true, color(255, random(252, 255), random(150, 255)));
}

function starSky(num) {
    for (var i = 0; i < num; i++) {
        this.move(random(800), random(800));
        this.star(random(10, 18));

    }
}

function swirl(num) {
    for (var i = 0; i < num; i++) {
        this.spiral(20, 19);
        this.right(90);

    }
}

function moon(size) {
    this.addPoint(this.x, this.y);
    for (var i = 0; i < 360; i++) {
        this.forward(size / 360);
        this.right(1);
        this.addPoint(this.x, this.y);
    }
    this.endTurtleShape(true, color(238, 242, 157))

}

function spaceDust(num, ang, reps) {
    this.setWeight(1);
    this.setPenColor("white");
    for (var i = 0; i < num; i++) {
        this.move(random(800), random(800));
        this.spiral(ang, reps);
    }
}

function trail(num){
    for (var i = 0; i < num; i++){
        this.move(random(100, 190), random(362, 394));
        this.spiral(100, random(10, 22));
    }
}
