import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';
const muiTheme = GetMuiTheme({
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.brown500,
    primary2Color: Colors.brown600,
    primary3Color: Colors.brown100,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500
  }
});

export default muiTheme;