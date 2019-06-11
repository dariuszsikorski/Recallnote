
import { ScreenOrientation } from 'expo';

/**
 * Allow ALL Screen Orientations
 */
const allowRotate = () => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
}

/**
 * Functions called when App is initialized
 */
const initializeApp = () => {
  allowRotate();
}

export default initializeApp;
