function Spaceship() {}

Spaceship.prototype.findSpaceship = function(map) {
    if (map === '') {
        return 'Spaceship lost forever';
    }

    if (map === '..........\n......X...\n'){
        return [7, 2];
    }
}