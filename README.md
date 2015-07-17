# Meteor Promise
Instead of using a callback with `Meteor.call`, you can use `Meteor.promise` and get a Promise in return. It has the same API as `Meteor.call`, but returns the control of the program to the caller rather than the callee.

## Usage
```js
const promise = Meteor.callPromise('someMethod', someArg1, someArg2);
promise.then((res) => {
  // res is whatever the callback would have returned
});
promise.catch((err) => {
  // this is called if there was an error thrown on the server
});

```

You could also be less verbose and drop the `promise` reference and chain the `then` and `catch` calls to the original `callPromise` return.

## No longer in a Fiber
The functions you pass to `then` and `catch` are no longer within a Fiber, so if you're on the server and touching any Meteor code, e.g. querying a Collection, test reporting in TinyTest, etc., you'll need to wrap the function with `Meteor.bindEnvironment`. See the tests for how to do this. You didn't have to worry about that when using giving callbacks to `Meteor.call` because Meteor automagically puts the callback in a Fiber for you.