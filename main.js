import HashMap from "./hashmap.js";

const test = HashMap()
//set
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString());

/*
console.log('reach full capacity 16 * 0.75 = 12')
//overwrite
console.log('overwrite lion, frog and kite');
test.set('lion', 'goldenish')
test.set('frog', 'greenish')
test.set('kite', 'pinkish')
console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString());

//reach full capacity
test.set('moon', 'silver')

console.log('Exceeded 12 full capacity, nodes will re-map')
console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString())

//overwrite
console.log('overwrite moon, elephant and dog')
test.set('moon','plate')
test.set('elephant','grayish')
test.set('dog','brownish')
console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString());

//get
console.log(`get value of frog: ${test.get('frog')}`);
console.log(`get value of moon: ${test.get('moon')}`);
console.log(`get value of sky: ${test.get('sky')}`);
//keys
console.log('keys: ')
console.log(test.keys());
//values
console.log('values: ');
console.log(test.values());
//entries
console.log('entries: ');
console.log(test.entries());
//has
console.log(`has mountain: ${test.has('mountain')}`)
console.log(`has dog: ${test.has('dog')}`)
console.log(`has banana: ${test.has('banana')}`)
//remove
console.log('remove carrot, jacket, dog, mountain');
console.log(`remove carrot ${test.remove('carrot')}`);
console.log(`remove jacket ${test.remove('jacket')}`);
console.log(`remove dog ${test.remove('dog')}`);
console.log(`remove mountain ${test.remove('mountain')}`);

console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString());
//set
console.log('set more elements')
test.set('pineapple', 'pineappleish')
test.set('kiwi', 'kiwish')
test.set('zebra', 'dashed')
test.set('beetle', 'beetlish')
test.set('shoe', 'shoeish')
test.set('table', 'tableish')
test.set('water', 'waterish')
test.set('wall', 'wallish')
test.set('marble', 'marbleish')
test.set('bird', 'birdish')
test.set('shark', 'sharkish')
test.set('spinach', 'spinachish')
console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString());


//remove
console.log('remove beetle, pineapple, wall, lion');
console.log(`remove beetle ${test.remove('beetle')}`);
console.log(`remove pineapple ${test.remove('pineapple')}`);
console.log(`remove wall ${test.remove('wall')}`);
console.log(`remove lion ${test.remove('lion')}`);
console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString());

//clear
console.log('clear');
test.clear()
console.log(`length of hashmap is ${test.length()}`);
console.log(`capacity of hashmap is ${test.capacity()}`);
console.log(test.toString());
*/

















