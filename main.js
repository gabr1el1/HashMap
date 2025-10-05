import HashMap from "./hashmap.js";
import HashSet from "./hashset.js";

const test = HashMap()
console.log('===Test Hash Map===');

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


//Hash Set
console.log('===Test Hash Set===');

const test2 = HashSet()
//set
test2.set('apple', 'red')
test2.set('banana', 'yellow')
test2.set('carrot', 'orange')
test2.set('dog', 'brown')
test2.set('elephant', 'gray')
test2.set('frog', 'green')
test2.set('grape', 'purple')
test2.set('hat', 'black')
test2.set('ice cream', 'white')
test2.set('jacket', 'blue')
test2.set('kite', 'pink')
test2.set('lion', 'golden')
console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString());


console.log('reach full capacity 16 * 0.75 = 12')
//overwrite
console.log('overwrite lion, frog and kite');
test2.set('lion', 'goldenish')
test2.set('frog', 'greenish')
test2.set('kite', 'pinkish')
console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString());

//reach full capacity
test2.set('moon', 'silver')

console.log('Exceeded 12 full capacity, nodes will re-map')
console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString())

//overwrite
console.log('overwrite moon, elephant and dog')
test2.set('moon','plate')
test2.set('elephant','grayish')
test2.set('dog','brownish')
console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString());

//get
console.log(`get value of frog: ${test2.get('frog')}`);
console.log(`get value of moon: ${test2.get('moon')}`);
console.log(`get value of sky: ${test2.get('sky')}`);
//keys
console.log('keys: ')
console.log(test2.keys());
//has
console.log(`has mountain: ${test2.has('mountain')}`)
console.log(`has dog: ${test2.has('dog')}`)
console.log(`has banana: ${test2.has('banana')}`)
//remove
console.log('remove carrot, jacket, dog, mountain');
console.log(`remove carrot ${test2.remove('carrot')}`);
console.log(`remove jacket ${test2.remove('jacket')}`);
console.log(`remove dog ${test2.remove('dog')}`);
console.log(`remove mountain ${test2.remove('mountain')}`);

console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString());
//set
console.log('set more elements')
test2.set('pineapple', 'pineappleish')
test2.set('kiwi', 'kiwish')
test2.set('zebra', 'dashed')
test2.set('beetle', 'beetlish')
test2.set('shoe', 'shoeish')
test2.set('table', 'tableish')
test2.set('water', 'waterish')
test2.set('wall', 'wallish')
test2.set('marble', 'marbleish')
test2.set('bird', 'birdish')
test2.set('shark', 'sharkish')
test2.set('spinach', 'spinachish')
console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString());

//remove
console.log('remove beetle, pineapple, wall, lion');
console.log(`remove beetle ${test2.remove('beetle')}`);
console.log(`remove pineapple ${test2.remove('pineapple')}`);
console.log(`remove wall ${test2.remove('wall')}`);
console.log(`remove lion ${test2.remove('lion')}`);
console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString());

//clear
console.log('clear');
test2.clear()
console.log(`length of hashset is ${test2.length()}`);
console.log(`capacity of hashset is ${test2.capacity()}`);
console.log(test2.toString());