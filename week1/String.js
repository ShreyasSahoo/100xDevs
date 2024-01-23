// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

//Length
const str = "loremakldjf;alkdjfalotijfkadljal;jfdsa;kfjladsjfl" 
console.log(str.length)

// indexOf
//returns first index of char , -1 if not found
console.log(str.indexOf('l'))

//last index
console.log(str.lastIndexOf('l'))

//slice
//start, end - not including end
console.log(str.slice(0,5));
//substring
//start, end - not including end
console.log(str.substring(0, 5))

// replace
console.log( str.replace('lorem', 'replacement'))

// split
console.log(str.split(';'))

console.log("  first");
console.log("   first".trim())
//to lowerCase to Uppercase