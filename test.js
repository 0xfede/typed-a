var assert = require('assert')
  , typed = require('./index')

var o = {
  name: 'product',
  description: null,
  price: 1.99
};

typed.accessor(o, 'name', 'en');
typed.accessor(o, 'description', 'en');
typed.accessor(o, 'price', 'USD');

assert.equal(o.getName(), 'product');
assert.equal(o.getName(), o.getName('en'));
assert.equal(o.getName('it'), o.getName());
o.setName('prodotto', 'it');
assert.notEqual(o.getName('it'), o.getName());
assert.equal(o.getName(), 'product');
assert.equal(o.getName(), o.getName('en'));
assert.equal(o.getName('it'), 'prodotto');

assert.equal(o.getDescription(), null);
o.setDescription('Description of the product');
assert.notEqual(o.getDescription(), null);
o.setDescription('Descrizione del prodotto', 'it');
assert.equal(o.getDescription('it'), 'Descrizione del prodotto');

o.setPrice('1.49', 'EUR');
assert.equal(o.getPrice(), o.getPrice('USD'));
assert.notEqual(o.getPrice(), o.getPrice('EUR'));

console.log(o);