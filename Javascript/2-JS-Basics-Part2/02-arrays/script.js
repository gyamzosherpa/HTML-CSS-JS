/*...........arrays...............*/
// const years = new Array(1990, 1969, 1948);
// console.log(years);

//only primitive value are immutable, but array is mutable because it is not a primitive value

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
console.log('total players:', players.length); //length of array, 4

console.log('first player is', players[0]); //Wes, 0 is the index of the array
console.log('last player is', players[players.length - 1]); //Poppy, -1 is the last index of the array

players[1] = 'Karen'; //change the value of the array
console.log(players); //shows the array with the changed value

const firstName = 'gyamzo'; //adding variables to the array
const details = [firstName, 'sherpa', 1996, 'designer', players];
console.log(details);

//calculate age using array
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const birthYear = [1990, 1969, 1948];
console.log('age:', calcAge(birthYear[2]));
console.log('age:', calcAge(birthYear[0]));

//shows output in array
const ages = [
  calcAge(birthYear[0]),
  calcAge(birthYear[1]),
  calcAge(birthYear[2]),
];
console.log(ages);

/*...........arrays methods...............*/

// 1. push method, adds new element to the end of the array
const list = ['a', 'b', 'c'];
list.push('d');
console.log(list); //shows the array with the new element i.e d

// 2. pop method, removes the last element of the array
const newGames = ['pubg', 'csgo', 'fortnite'];
newGames.pop();
console.log(newGames); //shows the array without the last element

// 3. unshift method, adds new element to the beginning of the array
const newList = ['a', 'b', 'c'];
const new_list = newList.unshift('d');
console.log(newList); //shows the array with the new element i.e d
console.log(new_list); //shows the length of the array
console.log(newList.indexOf('b')); //shows the index of the element

// 4. shift method, removes the first element of the array
const games = ['pubg', 'csgo', 'fortnite'];
games.shift();
console.log(games); //shows the array without the first element

// 5. includes method, checks if the array contains the element
const games2 = ['pubg', 'csgo', 'fortnite'];
games2.push('dota'); //adds dota to the array
console.log(games2.includes('dota')); //shows true if the array contains the element
console.log(games2.includes('freefire')); //false
