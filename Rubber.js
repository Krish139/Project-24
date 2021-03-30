class Rubber{
	constructor(x,y,radius){
		var options = {
			restitution:0.3,
			friction:5,
			density:1
		}
		//this.x=x;
		//this.y=y;
		//this.r=r
		this.body=Bodies.circle(100, 370, 10, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(pos.x,pos.y);
			rotate(angle);
			ellipseMode(RADIUS);
			strokeWeight(2);
			stroke("white");
			fill("darkblue");
			ellipse(0,0,10);
			pop()
	}

}