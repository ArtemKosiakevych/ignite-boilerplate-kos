import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from '../Themes/ApplicationStyles'

import { screens } from './screens'

// Wrap all screens with default navigatorStyle
function withGlobalStyles(WrappedComponent) {
  let wrapperClass = class Wrapper extends React.Component {
    static options(passProps) {
      return { ...styles.app }
    }
    render() {
      return (
        <SafeAreaView style={styles.flex}>
          <StatusBar barStyle="light-content" />
          <WrappedComponent {...this.props} />
        </SafeAreaView>
      )
    }
  }
  // Merge styles
  if (WrappedComponent.options) {
    wrapperClass.options = Object.assign(
      wrapperClass.options,
      WrappedComponent.options,
    )
  }
  return wrapperClass
}

function withProvider(Provider, ReduxScreen, store, props) {
  return (
    <Provider store={store}>
      <ReduxScreen {...props} />
    </Provider>
  )
}

export function registerScreens(store, Provider) {
  Object.keys(screens).forEach(key => {
    const ReduxScreen = withGlobalStyles(screens[key])
    Navigation.registerComponent(
      key,
      () => props => withProvider(Provider, ReduxScreen, store, props),
      () => ReduxScreen,
    )
  })
}
