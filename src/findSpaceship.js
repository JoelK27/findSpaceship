function Spaceship() {}

Spaceship.prototype.findSpaceship = function(map) {
    var lines = map.split('\n');
    var countX = (map.match(/X/g) || []).length;
    var result = 'Spaceship lost forever.';

    if (!/^[\nX.]*$/.test(map)) {
        return result;
    }

    if (countX > 1) {
        return 0;
    }

    outerLoop:
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < lines[i].length; j++) {
            if (lines[i][j] === 'X') {
                result = (i === 0 && j === 0) ? [0, 0] : [j + 1, i + 1];
                break outerLoop;
            }
        }
    }
    return result;
}