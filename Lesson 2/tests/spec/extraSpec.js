describe('window height', function() {
	it('returns window height', function() {
		expect(getWindowHeight()).toEqual(jasmine.any(Number));
	});
});


function getWindowHeight(){return 0;}