## Whorl

[![Build Status](https://travis-ci.com/HatchApps/whorl.svg?branch=master)](https://travis-ci.com/HatchApps/whorl)

A simple text spinning engine for making your text more interesting.

#### Usage

1. Create the Whorl engine and pass in a dictionary.

```
const whorl = new Whorl({
    dictionary: {
        greetings: ['Hi', 'Hello', 'Hey', 'Wassup'],
        positive_adjectives: ['great', 'super', 'awesome', 'amazing'],
    },
});
```

2. Start spinning!

```
whorl.spin('{greeting}, thanks for using whorl'); // Randomly generates "Hello, thanks for using whorl"
```

#### Whorl Syntax

`(Value one,Value two,Value)` - The generator will randomly choose one of the comma
delimited values and replace the entire bracket enclosed block with the chosen value.

`{<particle>}` - Uses the particle name to lookup a dictionary entry and replaces the bracketed block with a random choice.

`{<particle>|<filter>}` - The pipe is followed by a filter which is applied to the first piece of text. For example: the 'article' filter will add 'a' or 'an' before the chosen value. So `{adjective|article}` might end up as "an inspired" or "a healing".

Available filters: article, plural, uppercase, lowercase

#### Config Options

```
{
    dictionary: {
        'particle_name': ['replacement 1', 'replacement 2', ...]
    },
    filters: {
        custom: (value) => ...
    }
}
```

#### TODO

- [ ] Random choice from dictionary (currently only picks first)
- [ ] Allow dictionary types to be functions?
- [ ] Spin word in brackets "(Hi,Hello,Whats up)"
- [ ] Seed config to make testing deterministic
