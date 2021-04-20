class Snowfall{}

constructor(x,y,r)
{
    var options = {
        friction: 0.01,
        restitution:0.1          
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.rain = Bodies.circle(x,y,5,options)
    this.radius = 5;
    this.img = loadImage("snow4.webp");
    World.add(world, this.rain);
}

updateY()
    if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain, {x:random(0,1280), y:random(0,720)})
    }

