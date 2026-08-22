const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)  //push array into another array
// console.log(marvel_heros);

// const all_heros=marvel_heros.concat(dc_heros)    //push array into another array
// console.log(all_heros);

const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros);

const another_arr=[1,2,3,4,[5,6,7],8,[9,10,[11,12,13,[14,15]]]]

const real_arr=another_arr.flat(Infinity)
console.log(real_arr);  //it will return all the objects in multiple arrays inside an array into a single array


//convert string, number or anything into an array
console.log(Array.isArray("Saquib"));   //false /it will check wheater the object is array format or not
console.log(Array.from("Saquib"));  //it will convert the string into an array format
//[ 'S', 'a', 'q', 'u', 'i', 'b' ]


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));    //converts it into array
//[ 100, 200, 300 ]