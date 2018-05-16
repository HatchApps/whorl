import filters from '../src/filters';

test('Uppercase', () => {
    expect(filters.uppercase('test')).toBe('TEST');
});

test('Sentence', () => {
    expect(filters.sentence('test')).toBe('Test');
});

test('Article for vowel word', () => {
    expect(filters.article('awesome')).toBe('an awesome');
});

test('Article for consonant word', () => {
    expect(filters.article('super')).toBe('a super');
});
