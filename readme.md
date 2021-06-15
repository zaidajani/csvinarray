
# csvinarray

An NPM package which can be used to read and convert CSV files to JSON in javaScript.



## Installation 

Install `csvinarray` with npm

```bash 
 $ npm install csvinarray
```


## Usage/Examples

```javascript
const convert = require('csvinarray');
let jsonData = csvinarray(__dirname + "/sample/example-csv.csv");
// Data in json from the csv file.
```

## Simple syntax for converting your file

It is just one line in order to convert your CSV file to JSON.

### The Basic Function

There is just one function, Which can be used as this.

```javaScript
let jsonData = csvinarray(__dirname + "/sample/example-csv.csv");
//                            ^ very important | pwd + Path
// *pwd = present working directory
```

## Running Tests

To run tests, run the following command

```bash
$  npm run test
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@zaidajani](https://www.github.com/zaidajani)

* Waiting for other authors.


## Feedback

If you have any feedback, please reach out to us in the issues sections.

#### Enjoy your powerfull NPM package
