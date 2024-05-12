function Spaceship() {}

Spaceship.prototype.findSpaceship = function(map) {
    var lines = map.split('\n');
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < lines[i].length; j++) {
            if (lines[i][j] === 'X') {
                if (i === 0 && j === 0) {
                    return [0, 0];
                } else {
                    return [j + 1, i + 1];
                }
            }
        }
    }
    return 'Spaceship lost forever';
}