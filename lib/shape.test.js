const shapes = require('../lib/shape');



describe('polygon', () => {
  it('should return a color', () => {
    const svg = shapes.polygon('abc', 'black', 'white');
    expect(svg).toMatch(/<polygon[^>]+fill="white"/);
  });

  it('should return some text', () => {
    const svg = shapes.polygon('abc', 'black', 'white');
    expect(svg).toMatch(/<text[^>]+fill="black"[^>]+>abc<\/text>/);
  });
});

