ember-cli-build-notifications
==============================================================================

[![Build Status](https://travis-ci.org/pdud/ember-cli-build-notifications.svg?branch=master)](https://travis-ci.org/pdud/ember-cli-build-notifications)

This addon adds support for Linux, Mac OS X and Windows alerts when ember-cli has a buildError and postBuild (when the build is successful).

![image](example.png)
![image](build_success_example.png)

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-build-notifications
```


Usage
------------------------------------------------------------------------------

| Config Options | Ember CLI Build Event | Default |
| -------------- |:----------------------|:-------:|
| buildError     | buildError            | true    |
| buildSuccess   | postBuild             | false   |

To override defaults, add the following to the config file `{app-name}/config/build-notifications.js`:

```javascript
module.exports = {
  buildError: {
    notify: true,
    notificationOptions: {
      sound: true
    }
  },
  buildSuccess: {
    notify: true,
    notificationOptions: {
      sound: true
    }
  }
};
```

The `notificationOptions` settings are passed directly into node-notifier, see their [docs](https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults) for a full list of available settings

### Requirements

- **Mac OS X**: >= 10.8 or Growl if earlier.
- **Linux**: notify-osd installed (Ubuntu should have this by default)
- **Windows**: >= 8, task bar balloon if earlier or Growl if that is installed.
- **General Fallback**: Growl

Powered by [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) and it's [dependencies](https://github.com/mikaelbr/node-notifier#thanks-to-oss).

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-build-notifications`
* `yarn install`

### Running tests

* `npm run nodetest`
* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application
* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

Acknowledgment
------------------------------------------------------------------------------

* Made possible by: [https://github.com/ember-cli/ember-cli/pull/2832](https://github.com/ember-cli/ember-cli/pull/2832)
* Inspired by: [https://github.com/dylang/grunt-notify](https://github.com/dylang/grunt-notify)
* Mocha setup from: [https://github.com/rwjblue/ember-cli-divshot](https://github.com/rwjblue/ember-cli-divshot)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
