const pluralize = require('pluralize');

function article(value) {
    return 'aeiou'.indexOf(value[0]) !== -1 ? `an ${value}` : `a ${value}`;
}

module.exports = {
    article,
    plural: (value) => pluralize(pluralize),
    sentence: (value) => `${value[0].toUpperCase()}${value.substring(1)}`,
    uppercase: (value) => value.toUpperCase(),
}
