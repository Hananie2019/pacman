


class Pacman {

    constructor(x, y, width, height, speed) {

        this.x = x;

        this.y = y;

        this.direction = 4;

        this.nextDirection = 4;

        this.frameCount = 7;
        
        this.currentFrame = 1;

        this.width = width;

        this.speed = speed;

        this.height = height;

       

        

        setInterval(() => {
            this.changeAnimation();
        }, 100);

    }



    moveProcess() {
        this.changeDirectionIfPossible();
        this.moveForwards();

        if (this.checkCollisions()) {
            this.moveBackwards();
            return;
        }
        
    }

}