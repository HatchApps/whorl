## Whorl

Simple text spinning DSL

#### Usage

...

#### Syntax

`(Value one,Value two,Value)` - The generator will randomly choose one of the comma delimited values and replace the entire bracket enclosed block with the chosen value.

`{adjective}` - Inserts a random adjective at the given location. The same is done for things, venues etc. (see bios.json or postcards.json for examples).

`{adjective|article}` - The pipe is followed by a command which is applied to the first piece of data. For example: the 'article' command will add 'a' or 'an' before the chosen value. So `{adjective|article}` might end up as "an inspired" or "a healing". Other commands include: plural and sentence which pluralise or sentence case the resulting word.

Available filters include: article, plural, uppercase, lowercase

#### TODO

- Allow dictionary types to be functions?
- Spin word in brackets "(Hi,Hello,Whats up)"
- Random choice from dictionary (currently only picks first)
