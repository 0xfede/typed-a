typed-a
=======

Typed accessors for Node.js

```js
var typed = require('typed-a');

var o = {
  name: 'product',
  price: 1.99;
}

// Add an I18N accessor and a currency accessor to the object
typed.accessor(o, 'name', 'en');
typed.accessor(o, 'price', 'USD');

// Retrieving a default value:
o.getName();

// Retrieving a typed value:
o.getName('en');

// As 'it' is not defined yet:
o.getName() === o.getName('en') === o.getName('it');

// Setting a typed value:
o.setName('prodotto', 'it');

// Other examples:
o.getPrice() === o.getPrice('USD')
o.setPrice(1.49, 'EUR')
o.getPrice() !== o.getPrice('EUR')
```

After using the accessors as in previous examples, the origanal object has the following structure:

```js
{
  name: {
    en: 'product',
    it: 'prodotto'
  },
  price: {
    USD: 1.99,
    EUR: '1.49'
  },
  setName: [Function],
  getName: [Function],
  setDescription: [Function],
  getDescription: [Function],
  setPrice: [Function],
  getPrice: [Function]
}
```