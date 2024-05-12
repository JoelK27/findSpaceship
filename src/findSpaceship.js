function Spaceship() {}

Spaceship.prototype.findSpaceship = function(map) {
    var lines = map.split('\n');
    var countX = (map.match(/X/g) || []).length;
    if (countX > 1) {
        return 0;
    }
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < lines[i].length; j++) {
            if (lines[i][j] === 'X') {
                if (i === 0 && j === 0) {
                    return [0, 0];
                } else {
                    return [j + 1, i + 1];
                }
            }
            else if (i === lines.length - 1 && j === lines[i].length - 1 || lines[i][j] != 'X' && lines[i][j] != '.' && lines[i][j] != '\n') {
                return 'Spaceship lost forever.';
            }
        }
    }
    return 'Spaceship lost forever';
}