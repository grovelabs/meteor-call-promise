Package.describe({
  name: 'grove:call-promise',
  version: '0.0.2',
  summary: 'Meteor.call with Promises instead of callbacks',
  git: 'https://github.com/grovelabs/meteor-call-promise',
});

Package.onUse(function(api) {
  api.use([
    'ecmascript@0.1.3-plugins.1',
  ]);
  api.addFiles([
    'lib/call-promise.js'
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('grove:call-promise');
  api.use([
    'ecmascript@0.1.3-plugins.1',
    'tinytest'
  ]);
  api.addFiles([
    'tests/server/Methods.js'
  ], 'server');
  api.addFiles([
    'tests/lib/call-promise.js'
  ], ['client', 'server']);
});
