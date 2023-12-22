

class Ghost {


    constructor(
        x,
        y,
        range,
        width,
        speed,
        height,
        imageX,
        imageY,
        imageWidth,
        imageHeight

    ) {


        this.x = x;

        this.y = y;

        this.range = range;

        this.width = width;

        this.speed = speed;

        this.height = height;

        this.imageX = imageX;

        this.imageY = imageY;

        this.imageWidth = imageWidth;

        this.imageHeight = imageHeight;

        this.direction = DIRECTION_RIGHT;
        
        this.randomTargetIndex = parseInt(Math.random() * 4);

        this.target = randomTargetsForGhosts[this.randomTargetIndex];

        setInterval(() => {
            this.changeRandomDirection();
        }, 10000);

    }


    isInRange() {

        let xDistance = Math.abs(pacman.getMapX() - this.getMapX());

        let yDistance = Math.abs(pacman.getMapY() - this.getMapY());
        
        if (
            Math.sqrt(xDistance * xDistance + yDistance * yDistance) <=
            this.range
        ) {
            return true;
        }
        return false;
    }




    changeRandomDirection() {

        let addition = 1;

        this.randomTargetIndex += addition;

        this.randomTargetIndex = this.randomTargetIndex % 4;
    }




}