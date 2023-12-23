


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



    getMapY() {

        let mapY = parseInt(this.y / oneBlockSize);

        return mapY;
    }


    getMapX() {

        let mapX = parseInt(this.x / oneBlockSize);
        return mapX;
    }


    eat() {

        for (let i = 0; i < map.length; i++) {

            for (let j = 0; j < map[0].length; j++) {

                if (
                    map[i][j] == 2 &&
                    this.getMapX() == j &&
                    this.getMapY() == i
                ) 
                {
                    map[i][j] = 3;
                    score++;
                }

            }
        }
    }

    moveBackwards() {
        switch (this.direction) {

            case DIRECTION_RIGHT: 
                this.x -= this.speed;
                break;

            case DIRECTION_UP:
                this.y += this.speed;
                break;

            case DIRECTION_LEFT: 
                this.x += this.speed;
                break;

            case DIRECTION_BOTTOM: 
                this.y -= this.speed;
                break;

        }
    }

    moveForwards() {

        switch (this.direction) {

            case DIRECTION_RIGHT: 
                this.x += this.speed;
                break;

            case DIRECTION_UP: 
                this.y -= this.speed;
                break;

            case DIRECTION_LEFT: 
                this.x -= this.speed;
                break;

            case DIRECTION_BOTTOM: 
                this.y += this.speed;
                break;

        }
    }

    checkCollisions() {

        let isCollided = false;

        if (
            map[parseInt(this.y / oneBlockSize)][
                parseInt(this.x / oneBlockSize)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize + 0.9999)][
                parseInt(this.x / oneBlockSize)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize)][
                parseInt(this.x / oneBlockSize + 0.9999)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize + 0.9999)][
                parseInt(this.x / oneBlockSize + 0.9999)
            ] == 1
        ) {
            isCollided = true;
        }
        return isCollided;
    }

    checkGhostCollision(ghosts) {

        for (let i = 0; i < ghosts.length; i++) {

            let ghost = ghosts[i];

            if (
                ghost.getMapX() == this.getMapX() && ghost.getMapY() == this.getMapY()
            ) 
            {
                return true;
            }
        }
        return false;
    }

    changeDirectionIfPossible() {

        if (this.direction == this.nextDirection) return;

        let tempDirection = this.direction;

        this.direction = this.nextDirection;

        this.moveForwards();

        if (this.checkCollisions()) {

            this.moveBackwards();

            this.direction = tempDirection;
        } 

        else {
            this.moveBackwards();
        }
    }

  

    getMapXRightSide() {
        let mapX = parseInt((this.x * 0.99 + oneBlockSize) / oneBlockSize)
        
        return mapX;
    }

    getMapYRightSide() {

        let mapY = parseInt((this.y * 0.99 + oneBlockSize) / oneBlockSize);

        return mapY;
    }

    changeAnimation() {

        this.currentFrame =
        this.currentFrame == this.frameCount ? 1 : this.currentFrame + 1;
    }


   

}