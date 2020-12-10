import {choice, remove} from './helpers';

import fruits from './fruits';

const fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please.`);

console.log(`Here you go: ${fruit}`);

console.log('Delicious! May I have another?');

console.log(remove(fruits, fruit));

console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`)

