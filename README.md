# Meteor Promise
Instead of using a callback with `Meteor.call`, you can use `Meteor.callPromise` and get a Promise in return. It has the same API as `Meteor.call`, but returns the control of the program to the caller rather than the callee by using Promises. 

Uses MDG's `promise` package for the `Promise` polyfill.

## Usage
```js
const promise = Meteor.callPromise('someMethod', someArg1, someArg2);
promise.then((res) => {
  // res is whatever the callback would have returned
});
promise.catch((err) => {
  // this is called if there was an error thrown from the Meteor method
});

```

You could also be less verbose and drop the `promise` reference and chain the `then` and `catch` calls to the original `callPromise` return.

## Testing

```bash
$ npm test
```
You'll have to open `localhost:3000` to see the tests run