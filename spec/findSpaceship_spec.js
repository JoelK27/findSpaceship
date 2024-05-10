describe('Find Spaceship', function() {
    beforeEach(function() {
        spaceship = new Spaceship();
    });
});


it('should return "Spaceship lost forever" for an empty string', function() {
    expect(spaceship.find('')).toEqual('Spaceship lost forever');
});
