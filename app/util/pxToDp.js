'use strict';

import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;

const uiWidthPx = 640;

function pxToDp(uiElementPx) {
    return uiElementPx *  deviceWidthDp / uiWidthPx;
}

export default pxToDp;
