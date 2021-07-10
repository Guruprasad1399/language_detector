const a = require('franc');
const b = require('langs');
const c = require('colors');
const input = process.argv[2];
const cc = a(input);
if (cc === 'und') {
    console.log("Sorry! Please try long inputs".bgMagenta)
}
else {
    const codeo = b.where('3', cc);
    console.log(codeo.name.green)
}
