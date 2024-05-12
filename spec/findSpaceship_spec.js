describe('Find Spaceship', function() {
    beforeEach(function() {
        spaceship = new Spaceship();
    });
    
    it('should return "Spaceship lost forever" for an empty string', function() {
        expect(spaceship.findSpaceship('')).toEqual('Spaceship lost forever');
    });

    it('should return [7, 2] for a string containing "..........\n......X...\n"', function() {
        expect(spaceship.findSpaceship('..........\n......X...\n')).toEqual([7, 2]);
    });

    it('should return [0, 0] for a string containing "X"', function() {
        expect(spaceship.findSpaceship('X')).toEqual([0, 0]);
    });

    it('should return "No Spaceship found." for a string containing "..........\n.........."', function() {
        expect(spaceship.findSpaceship('..........\n..........')).toEqual('No Spaceship found.');
    });
});
    