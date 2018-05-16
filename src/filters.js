import pluralize from 'pluralize';

function article(value) {
    const article = 'aeiou'.indexOf(value[0]) !== -1 ? 'an' : 'a';

    return `${article} ${value}`;
}

export default {
    article,
    plural: (value) => pluralize(value),
    sentence: (value) => `${value[0].toUpperCase()}${value.substring(1)}`,
    uppercase: (value) => value.toUpperCase(),
};
