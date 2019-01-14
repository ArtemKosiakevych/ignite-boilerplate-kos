const constants = {
  PATTERN_IMPORTS: 'imports',
  PATTERN_ROUTES: 'routes'
}

module.exports = {
  constants,
  [constants.PATTERN_IMPORTS]: `import { createStackNavigator, createAppContainer } from 'react-navigation'`,
  [constants.PATTERN_ROUTES]: 'const PrimaryNav'
}
