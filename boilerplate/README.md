#  <%= props.name %>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

### Containers

To generate a new Container or Screen you can use the following generator commands:

* `ignite g screen New` - Will create a `NewScreen.js` and also a `Styles/NewScreenStyle.js`. Important to mention that the `screen` generator will add the `Screen` on the file/class name to make easier to identify.

Those commands will also add the new container to the navigations file.


### Components

To generate a new Component you can use the following generator commands:

* `ignite g component New` - Will create a `New.js` and also a `Styles/NewStyle.js`.
* `ignite g component path/New` - The same as above, but will use a relative path
* `ignite g component --folder path` - An alternative to `ignite g component path/index`
* `ignite g component --folder path new ` - An alternative to `ignite g component relativePath/New`

### Redux, Sagas

Contains a preconfigured Redux and Redux-Sagas setup. Review each file carefully to see how Redux interacts with your application.

Here again we have generators to help you out. You just have to use one of the following:

* `ignite g redux Amazing` - Will generate and link the redux for `Amazing`.
* `ignite g saga Amazing` - The same as above, but for the Sagas

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!
