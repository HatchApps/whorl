const Whorl = require('../src');

test('Returns string as is', () => {
    const whorl = new Whorl();

    expect(whorl.spin('This is a test')).toBe('This is a test');
});

test('Replaces registered dictionary type', () => {
    const whorl = new Whorl({
        dictionary: {
            adjective: ['super'],
        },
    });

    expect(whorl.spin('What a {adjective} day')).toBe('What a super day');
});

test('Spin applies filters', () => {
    const whorl = new Whorl({
        dictionary: {
            adjective: ['super'],
        },
    });

    expect(whorl.spin('What {adjective|article} day')).toBe('What a super day');
});
