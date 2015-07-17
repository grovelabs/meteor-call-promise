Package.describe({
  name: 'grove:call-promise',
  version: '0.0.1',
  summary: 'Meteor.call with Promises instead of callbacks',
  git: 'https://github.com/grovelabs/meteor-call-promise',
});

Package.onUse(function(api) {
  api.use([
    'grigio:babel@0.1.4',
  ]);
  api.addFiles([
    'lib/call-promise.es6'
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('grove:call-promise');
  api.use([
    'grigio:babel@0.1.4',
    'tinytest'
  ]);
  api.addFiles([
    'tests/server/Methods.es6'
  ], 'server');
  api.addFiles([
    'tests/lib/call-promise.es6'
  ], ['client', 'server']);
});
