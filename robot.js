var cords = {x: 0, y:0};
var nose = {dir: "N"};

const input = "".split(",");

for (let i = 0; i < input.length; i++) {
    if (input[i] == "f") {
        if (nose.dir == "N") {
            cords.y += 1;
        } else if (nose.dir == "W") {
            cords.x -= 1;
        } else if (nose.dir == "E") {
            cords.x += 1;
        } else if (nose.dir == "S") {
            cords.y -= 1;
        }
    } else if (input[i] == "a") {
        if (nose.dir == "N") {
            nose.dir = "W";
        } else if (nose.dir == "W") {
            nose.dir = "S";
        } else if (nose.dir == "S") {
            nose.dir = "E";
        } else if (nose.dir == "E") {
            nose.dir = "N";
        }
    } else if (input[i] == "o") {
        if (nose.dir == "N") {
            nose.dir = "E";
        } else if (nose.dir == "E") {
            nose.dir = "S";
        } else if (nose.dir == "S") {
            nose.dir = "W";
        } else if (nose.dir == "W") {
            nose.dir = "N";
        }
    }
}

console.log(`CORDINATES: X(${cords.x}) Y(${cords.y}) | DIR: ${nose.dir}`)
