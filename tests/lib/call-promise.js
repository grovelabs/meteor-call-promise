Tinytest.addAsync('Should resolve the result of the method, no args',
  (test, done) => {
    Meteor.callPromise('goodMethod')
    .then( (val) => {
      test.equal(val, 'test value!');
      done();
    });
  }
);

Tinytest.addAsync('Should resolve the result of the method, with args',
  (test, done) => {
    const arg = 'This should be returned';
    Meteor.callPromise('goodMethodWithArg', arg)
    .then( (result) => {
      test.equal(arg, result);
      done();
    });
  }
);

Tinytest.addAsync('Should reject if there is an error in the method',
  (test, done) => {
    Meteor.callPromise('badMethod')
    .then( (val) => {
      // this should never run, so fail if it does
      test.equal(true, false);
      done();
    })
    .catch( (err) => {
      test.equal(err.error, 'some-stinkin-error');
      test.equal(err.reason, `You did this on purpose, didn't you?`);
      done();
    });
  }
);