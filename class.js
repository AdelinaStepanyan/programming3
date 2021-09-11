class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        if (this.multiply >= 8) {
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 1;

                var newGrass = new Grass(newX, newY, 1);
                grassArr.push(newGrass);
                this.multiply = 0;
            }
        }
    }
}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 5;
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
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {



        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrassEater = new GrassEater(newX, newY, 2);
            grasseaterArr.push(newGrassEater);


        
        }
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX; 
            this.energy--;
        }
       
    }
    eat() {
        var grassCells = this.chooseCell(1);
        var newCell = random(grassCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in grassArr) {

                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
            if (this.energy >= 5) {
                this.mul();
            }

        }
        else {
            this.move()
            this.energy--
            if (this.energy < 1) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grasseaterArr) {
            if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                grasseaterArr.splice(i, 1);
                break;
            }
        }
    }

}
class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply=0;
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
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
class Gishatichx {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply=0;
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
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        
       
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            var newGishatich = new Gishatichx(newX, newY, 4);
            gishxArr.push(newGishatich);
        }
    }
    
    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;
        }
    }

    eat() {
        var grassCells = this.chooseCell(3);
        var newCell = random(grassCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
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
        for (var i in gishxArr) {
            if (this.x == gishxArr[i].x && this.y == gishxArr[i].y) {
                gishxArr.splice(i, 1);
                break;
            }
        }
    }

}

class Purple{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply=0
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
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
        else{
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

        }else{
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
        }}

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