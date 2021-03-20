class paper
{
	constructor(x,y,r)
	{

var options = {
   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.2
}
this.x = x;
this.y = y;
this.r = r;

this.image = loadImage("paper.png");
this.body = Body.circle(this.x,this.y,this.r-20,options);
World.add(world,this.body);
}
display() {
var paperPosistion = this.body.paperPosistion;
push()
			translate(paperPosition.x, paperPosition.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
            fill(255) 
            imageMode(CENTER);
            image(this.image,0,0,this.r,this.r)
			//rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
}
}
