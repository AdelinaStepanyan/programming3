
class Purple extends GrassEater {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0
        this.energy = 25;
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

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            var newGishatich = new Gishatichx(newX, newY, 5);
            gishxArr.push(newGishatich);
        }
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;
        }
    }
    eat() {
        var grassCells = this.chooseCell(4);
        var newCell = random(grassCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in gishxArr) {

                if (newX == gishxArr[i].x && newY == gishxArr[i].y) {
                    gishxArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 10) {
                this.mul();
            }

        }
        else {
            var grassCells = this.chooseCell(3);
            var newCell = random(grassCells);
            if (newCell) {
                this.energy++
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 5;
                matrix[this.y][this.x] = 0;
                this.y = newY;
                this.x = newX;
                for (var i in gishArr) {

                    if (newX == gishArr[i].x && newY == gishArr[i].y) {
                        gishArr.splice(i, 1);
                        break;
                    }
                }

                if (this.energy >= 10) {
                    this.mul();
                }

            } else {
                var grassCells = this.chooseCell(2);
                var newCell = random(grassCells);
                if (newCell) {
                    this.energy++
                    var newX = newCell[0];
                    var newY = newCell[1];
                    matrix[newY][newX] = 5;
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
        }

    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in purpleArr) {
            if (this.x == purpleArr[i].x && this.y == purpleArr[i].y) {
                purpleArr.splice(i, 1);
                break;
            }
        }
    }

}