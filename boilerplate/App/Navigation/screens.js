/**
 * @flow
 */
import type { NavigatorProp } from 'react-native-navigation'

import LaunchScreen from '../Containers/LaunchScreen'

export const screens = {
  launch: LaunchScreen,
}

export type ScreenRegistrations = typeof screens
export type Navigator = NavigatorProp<ScreenRegistrations>
