class Mango{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("Plucking mangoes/mango.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}