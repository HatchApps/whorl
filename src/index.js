const defaultFilters = require('./filters');

const defaultOptions = {
    dictionary: {},
    filters: {
        ...defaultFilters
    },
};

class Whorl {
    constructor(options = defaultOptions) {
        Object.assign(options, defaultOptions);

        this.dictionary = options.dictionary;
    }

    spin(text) {


        return text;
    }
}

module.exports = Whorl;
