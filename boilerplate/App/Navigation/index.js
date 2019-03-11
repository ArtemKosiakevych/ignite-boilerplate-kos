import { Navigation } from 'react-native-navigation'
import { Metrics, Colors } from '../Themes'

export const replaceStack = (route: string) => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      height: 0,
    },
    layout: {
      backgroundColor: Colors.appBackground,
      orientation: ['portrait'],
    },
  })
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: route,
            },
          },
        ],
      },
    },
  })
}

export const push = (componentId: string, route: string, params: Object) => {
  let options = {}
  if (params.title) {
    options = {
      topBar: {
        visible: true,
        height: Metrics.actionBar,
        title: {
          text: params.title,
        },
      },
    }
  }
  Navigation.push(componentId, {
    component: {
      name: route,
      passProps: params.passProps,
      options,
    },
  })
}

export const pop = (componentId: string) => {
  Navigation.pop(componentId)
}
