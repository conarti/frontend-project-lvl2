[![Actions Status](https://github.com/conarti/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/conarti/frontend-project-lvl2/actions)
[![Actions Status](https://github.com/conarti/frontend-project-lvl2/workflows/eslint%20and%20tests/badge.svg)](https://github.com/conarti/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/574923cf107107fbd382/maintainability)](https://codeclimate.com/github/conarti/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/574923cf107107fbd382/test_coverage)](https://codeclimate.com/github/conarti/frontend-project-lvl2/test_coverage)

### Description

Gendiff - a program defining the difference between two data structures.

The capabilities of the utility:
- Support for different input formats: yaml, json
- Report generation as plain text, stylish and json

### Requirements
- NodeJS 14+

### Installation
Open terminal at destination folder and paste:
```shell
git clone https://github.com/conarti/frontend-project-lvl2.git . # clone repository
make install # install dependencies
```
```shell
make test # run tests
make test-coverage # show tests coverage
make lint # run linter
```

### Usage example
```shell
# setup cli app
make setup
```
```shell
# stylish
gendiff path/to/file.yml another/path/file.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
```shell
# plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```

#### asciinema
Default output
[![asciicast](https://asciinema.org/a/9sWtgzURSgufq2PC87sBRvhyG.svg)](https://asciinema.org/a/9sWtgzURSgufq2PC87sBRvhyG)
Plain output
[![asciicast](https://asciinema.org/a/458036.svg)](https://asciinema.org/a/458036)
Json output
[![asciicast](https://asciinema.org/a/458037.svg)](https://asciinema.org/a/458037)
#### Importing
```javascript
import genDiff from '@hexlet/code';

const diff = genDiff(filepath1, filepath2);
console.log(diff);
```
