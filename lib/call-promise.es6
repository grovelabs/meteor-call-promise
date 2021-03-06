Meteor.callPromise = (method, ...args) => {
  return new Promise ( (resolve, reject ) => {
    Meteor.call(method, ...args, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    })
  })
}