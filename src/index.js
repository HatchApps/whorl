const defaultFilters = require('./filters');

const defaultOptions = {
    dictionary: {},
    filters: {
        ...defaultFilters
    },
};

class Whorl {
    constructor(options = defaultOptions) {
        options = Object.assign(defaultOptions, options);

        this.dictionary = options.dictionary;
        this.filters = options.filters;

        this.replaceParticles = (text) => {
            const regex = /\{(\w+(?:\|\w+)*)\}/g;

            let match;

            while ((match = regex.exec(text)) != null) {
                const [particle, ...filters] = match[1].split('|');

                if (!this.dictionary[particle]) {
                    continue;
                }

                let value = this.dictionary[particle][0];

                filters.forEach(f => value = this.filters[f](value));

                text = text.replace(match[0], value);
            }

            return text;
        }
    }

    spin(text) {
        const result = this.replaceParticles(text);

        return result;
    }
}

module.exports = Whorl;
