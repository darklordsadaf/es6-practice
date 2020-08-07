const ages = [12, 14, 16, 17, 13];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];

// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges = [...ages, ...ages, 5, ...ages3];
console.log(allAges);


const num = [750, 450, 550];
const maximum = Math.max(...num);

console.log(maximum);