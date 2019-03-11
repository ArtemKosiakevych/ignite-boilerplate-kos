import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  actionBar: 56,
}

export default metrics
