class gold{

    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill('yellow');
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        pop();
    }





}