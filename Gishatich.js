class Gishatich extends GrassEater {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
        this.energy = 16;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul() {
        this.multiply++;

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            var newGishatich = new Gishatich(newX, newY, 2);
            gishArr.push(newGishatich);
        }
        else {
            var emptyCells = this.chooseCell(1);
            var newCell = random(emptyCells);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 3;
                var newGishatich = new Gishatich(newX, newY, 2);
                gishArr.push(newGishatich);
            }

        }
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;

        }
        else {
            var emptyCells = this.chooseCell(1);
            var newCell = random(emptyCells);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 3;

                matrix[this.y][this.x] = 0;

                this.y = newY;
                this.x = newX;
            }

        }
    }


    eat() {
        var grassCells = this.chooseCell(2);
        var newCell = random(grassCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in grasseaterArr) {

                if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 10) {
                this.mul();
            }

        }
        else {


            this.move()
            this.energy--
            if (this.energy < 1) {
                this.die();
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishArr) {
            if (this.x == gishArr[i].x && this.y == gishArr[i].y) {
                gishArr.splice(i, 1);
                break;
            }
        }
    }
}
