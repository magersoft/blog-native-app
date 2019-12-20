import * as Font from 'expo-font';
import { DB } from './db';

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf')
    });
    await DB.init();
    console.log('Database init ...')
  } catch (e) {
    console.error(e);
  }
}
