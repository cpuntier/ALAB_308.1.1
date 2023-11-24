// The initial numbers that must be verified.
const n1 = 12;
const n2 = 15;
const n3 = 16;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;


// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//Math Problems

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;

console.log(isDivisibleBy5);


const firstLargerThanLast = (n1 > n4);

console.log(firstLargerThanLast);

const chain = ((n2-n1) * n3 ) % n4 ;

console.log(chain)


const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25; //can use this instead of bang in isValid


// Road Trip Problems

//Total Gallons Calculations
const _55mph = 1500 / 30; //50 gallons
const _60mph = 1500 / 28; //53.5714 gallons
const _75mph = 1500 / 23; //65.2174 gallons 

//Total Budget calculations
const _55cost = _55mph * 3; //$150
const _60cost = _60mph * 3; //$160.71
const _75cost = _75mph * 3; //$195.61 

//Length of Time Calculations
const _55time = 1500/55; //27.27 hrs
const _60time = 1500/60; //25 hrs
const _75time = 1500/75; //20 hrs


console.log(`Number of gallons when going 55mph on this trip is ${_55mph}, total cost for this trip is ${_55cost}, total time is ${_55time}`)
console.log(`Number of gallons when going 60mph on this trip is ${_60mph}, total cost for this trip is ${_60cost}, total time is ${_60time}`)
console.log(`Number of gallons when going 55mph on this trip is ${_75mph}, total cost for this trip is ${_75cost}, total time is ${_75time}`)

/**
 * Going 75 mph is over budget so this one makes no sense to do. I would say going 60mph makes most sense. You'll get there sooner at a slightly higher cost.
 * Going 50mph is fine too if you want to save a little money
 */


