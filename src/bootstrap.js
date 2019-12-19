import * as Font from 'expo-font';

export async function bootstrap() {
  await Font.loadAsync({
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf')
  })
}
