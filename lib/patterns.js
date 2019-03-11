const constants = {
  PATTERN_IMPORTS: 'imports',
  PATTERN_ROUTES: 'routes'
}

module.exports = {
  constants,
  [constants.PATTERN_IMPORTS]: `import type { NavigatorProp } from 'react-native-navigation'`,
  [constants.PATTERN_ROUTES]: 'export const screens = {'
}
